import React, { useState } from 'react';

const Search = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      getWeather(city);
      setCity('');
    }
  };

  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter city..." 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        <button className='btn btn-primary ms-3' type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;