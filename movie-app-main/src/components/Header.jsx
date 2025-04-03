
import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyMovieApp</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => onSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={() => onSearch(document.querySelector('input').value)}
          className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
