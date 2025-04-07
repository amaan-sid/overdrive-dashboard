import React, { useState } from 'react';
import { API_KEY } from '../constants/Weather_API_KEY';
import Navbar from './Navbar';

const Weather = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('London'); 
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEYY = API_KEY

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setQuery(city);
    fetchWeather(city);
    setCity('');
  };

  return (
    <> 
    <Navbar />
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-600 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">🌤️ Live Weather</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4 justify-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded-md w-2/3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}

      {weather && weather.cod === 200 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{weather.name}, {weather.sys.country}</h3>
          <p className="capitalize text-gray-600">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
          <p className="text-sm text-gray-500">Feels like {weather.main.feels_like}°C</p>
        </div>
      )}

      {weather && weather.cod !== 200 && !loading && (
        <p className="text-red-500 mt-4">City not found. Try again.</p>
      )}
    </div>
    </>
  );
};

export default Weather;
