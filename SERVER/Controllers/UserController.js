import asyncHandler from "express-async-handler";
import User from "../Models/UserModels.js";
import bcrypt from "bcryptjs";
import generateToken from "../middlewares/Auth.js";

//! @desc Register User
// @route POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, image } = req.body;

  // if (!password || typeof password !== "string") {
  //   res
  //     .status(400)
  //     .json({ message: "Password is required and must be a string" });
  //   return;
  // }

  try {
    const userExists = await User.findOne({ email });
    //check if user exists
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //else create new User

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      image,
    });
    //If user created Successfully send user data and token to client
    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } 
  catch (error) {
    res.status(400).json({ message: "User Successfully Registered" });
  }
});

//! @desc Login User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    //find user in DataBase
    const user = await User.findOne({ email });
    //if user  exists compare password with hashed password then send user data and token to client
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
      });
      //if user not found or password does not match  send error message
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({ message: "Logged In" });
  }
});

//! @desc Update user Profile User
// @route POST /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { fullName, email, image } = req.body;

  try {
    // Find user in DB by ID using req.user._id set by protect middleware
    const user = await User.findById(req.user._id);

    if (user) {
      // Update user data if fields are provided in request body
      user.fullName = fullName || user.fullName;
      user.email = email || user.email;
      user.image = image || user.image;

      // Save updated user data in DB
      const updatedUser = await user.save();

      // Respond with updated user data and token to the client
      res.json({
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id), // Assuming generateToken function is correctly implemented
      });
    } else {
      //Send Error Message
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { registerUser, loginUser, updateUserProfile };
