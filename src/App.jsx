import React, { useState } from 'react';
import Weather from './Weather';
import Search from './Search';
import Error from './Error';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    const apiKey = 'YOUR_API_KEY'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="App bg-dark">
      <h1 className='text-center mt-4 text-light'>Weather App</h1>
      <Search getWeather={getWeather} />
      {error && <Error message={error} />}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;