import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-6 hero">

      <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-8 text-center border border-gray-200">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4 flex justify-center items-center gap-2">
          Welcome to TravelConnect <span className="text-3xl">🚌</span>
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          Share your bus journey stories, travel tips, and connect with fellow explorers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Link
            to="/submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            ✍️ Share a Story
          </Link>
          <Link
            to="/forum"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            💬 Join the Forum
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;