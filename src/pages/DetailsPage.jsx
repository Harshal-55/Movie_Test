import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header>
        <Navbar />
      </header>

      <div className="flex flex-col md:flex-row items-start p-4 space-y-4 md:space-y-0 md:space-x-6 lg:mx-8">
        {/* Movie Image */}
        <div className="md:w-1/3">
          <img
            src={movie.image?.original}
            alt={movie.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold">{movie.name}</h1>
          <p className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: movie.summary }} />
          <div className="mt-6">
            <p className="text-lg">
              <span className="font-semibold">Language:</span> {movie.language}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Genres:</span> {movie.genres.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
