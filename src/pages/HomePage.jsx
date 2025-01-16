import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <div className="p-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="border p-2 w-full mb-4 bg-gray-800 text-white placeholder-gray-500"
          onFocus={() => navigate("/search")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-8">
          {movies.map((item) => (
            <Link to={`/details/${item.show.id}`} key={item.show.id}>
              <div className="border p-4 rounded-lg bg-gray-800 hover:shadow-[0_4px_15px_rgba(255,255,255,0.8)] hover:scale-105 transform transition duration-300">
              

                <img
                  src={item.show.image?.medium}
                  alt={item.show.name}
                  className="w-auto h-auto rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{item.show.name}</h2>
                <p
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: item.show.summary?.substring(0, 150) + "...",
                  }}
                ></p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
