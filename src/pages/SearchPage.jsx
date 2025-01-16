import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => setResults(response.data));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
        <header>
            <Navbar />
        </header>
      <input
        type="text"
        placeholder="Search for a movie..."
        className="border p-2 w-full mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchMovies()}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((item) => (
          <Link to={`/details/${item.show.id}`} key={item.show.id}>
            <div className="border p-4">
              <img
                src={item.show.image?.medium}
                alt={item.show.name}
                className="w-full"
              />
              <h2 className="text-lg font-bold mt-2">{item.show.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-6xl font-bold">Movie App</h1>
        <p className="text-white text-2xl mt-4">Search Your Fav Movie</p>
      </div>
    </div>
  );
}
