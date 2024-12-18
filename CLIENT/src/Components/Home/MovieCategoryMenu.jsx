import React from "react";

const MovieCategoryMenu = () => {
  
  const mainCategories = [
    { name: "Bollywood Movies", color: "green" },
    { name: "Dual Audio Content", color: "red" },
    { name: "Hollywood Movies", color: "gold" },
    { name: "Join Our Telegram", color: "blue" },
  ];

  const subCategories = [
    "Dual Audio (Hindi) 720P",
    "Hollywood Movies 1080P",
    "Telugu",
    "Action",
    "Adventure",
    "Animation",
    "Cartoon",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
    "War",
    "Web Series",
    "Tamil 720P",
    "Pakistani",
    "Punjabi Movies 720P",
  ];
//   style={{ display: "flex", justifyContent: "center", gap: "10px" }}
  return (
    <div style={{color: "#fff", padding: "20px" }} className=" max-w-screen-xl mx-auto">
      <div className="flex justify-center flex-col md:flex-row gap-4">
        {mainCategories.map((category, index) => (
          <button
            key={index}
            style={{
              backgroundColor: category.color,
              border: "none",
              borderRadius: "0px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {subCategories.map((subCategory, index) => (
          <div
            key={index}
            style={{
              padding: "10px 15px",
              borderRadius: "0px",
              fontSize: "14px",
            }}
            className="text-sky-500 font-semibold bg-black border-2 border-sky-500"
          >
            {subCategory}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCategoryMenu;
