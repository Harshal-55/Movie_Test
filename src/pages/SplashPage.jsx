import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home"), 4000); // Adjust time as needed
  }, [navigate]);

  return (
    <div className="relative h-screen bg-black">
      <img 
        src="./movie-icon-app.jpg" 
        alt="Background" 
        className="object-cover w-10 h-10 absolute top-0 left-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-6xl font-bold">Movie App</h1>
        <p className="text-white text-2xl mt-4">Enjoy the best movies at your fingertips</p>
      </div>
    </div>
  );
}
