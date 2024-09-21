import React from 'react';

const FilterBar = ({ genres, selectedGenre, onFilter }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <select
        className="px-4 py-2 border border-gray-300 rounded-md"
        value={selectedGenre}
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
