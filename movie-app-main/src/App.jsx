
import React, { useEffect, useState } from 'react';
import Header from './components/Header'; // Import Header
import Homepage from './components/Homepage';
import FilterBar from './components/FilterBar';
import Wishlist from './components/Wishlist';

const dummyMovies = [
  {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    poster_path: "https://example.com/inception.jpg",
    genre_ids: [28, 12, 878],
  },
  {
    id: 2,
    title: "The Matrix",
    release_date: "1999-03-31",
    poster_path: "https://example.com/matrix.jpg",
    genre_ids: [28, 878],
  },
  {
    id: 3,
    title: "Interstellar",
    release_date: "2014-11-07",
    poster_path: "https://example.com/interstellar.jpg",
    genre_ids: [12, 18, 878],
  },
  {
    id: 4,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    poster_path: "https://example.com/dark-knight.jpg",
    genre_ids: [28, 80],
  },
  {
    id: 5,
    title: "Parasite",
    release_date: "2019-05-30",
    poster_path: "https://example.com/parasite.jpg",
    genre_ids: [35, 18, 53],
  },
];

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setMovies(dummyMovies);
    setFilteredMovies(dummyMovies);
  }, []);

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleFilter = (genre) => {
    // Your filtering logic here
  };

  const addToWishlist = (movie) => {
    setWishlist((prevWishlist) => [...prevWishlist, movie]);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter(movie => movie.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <Header onSearch={handleSearch} />
      <FilterBar
        genres={[28, 12, 878]} // Example genre IDs
        onFilter={handleFilter}
      />
      <Homepage movies={filteredMovies} addToWishlist={addToWishlist} />
      <Wishlist wishlist={wishlist} onRemove={removeFromWishlist} /> {/* Pass remove function */}
    </div>
  );
};

export default App;
