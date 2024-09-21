// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, addToWishlist }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // Movie poster URL

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={movie.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">
          Release Year: {movie.release_date.substring(0, 4)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => addToWishlist(movie)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
