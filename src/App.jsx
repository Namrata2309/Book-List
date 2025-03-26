import React from "react";
import Book from "./Components/Book"

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._SL1500_.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    image: "https://i.pinimg.com/736x/f2/ff/92/f2ff92d1acec13446b566238c766ec6c.jpg",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">📚 Book List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} image={book.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
