// src/components/Wishlist.jsx
import React from 'react';
import MovieCard from './MovieCard';

const Wishlist = ({ wishlist, onRemove }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">My Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.length > 0 ? (
          wishlist.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard movie={movie} addToWishlist={() => {}} />
              <button
                onClick={() => onRemove(movie.id)} // Call the remove function
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No movies in your wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
