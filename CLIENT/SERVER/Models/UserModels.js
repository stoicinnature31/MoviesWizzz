import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a Full Name"],
    },
    email: {
      type: String,
      required: [true, "Please add an Email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a Full Name"],
      minlength: [6, "Password must be atleast 6 characters"],
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    likedMovies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
