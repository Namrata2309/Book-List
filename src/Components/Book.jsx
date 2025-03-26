import React from "react";

const Book = ({ title, author, image }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-60 object-cover rounded-md" />
      <h2 className="text-2xl font-semibold mt-2 text-yellow-300">{title}</h2>
      <p className="text-gray-400">by {author}</p>
    </div>
  );
};

export default Book;
