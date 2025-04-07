import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Github = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setError(null);
    setProfile(null);
    if (!username.trim()) return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error('User not found');
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProfile();
  };

  return (
    <> 
    <Navbar />
    
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-600 rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">🐙 GitHub Profile Viewer</h2>

      <form onSubmit={handleSubmit} className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-2/3"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {profile && (
        <div className="mt-6 space-y-2">
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold">{profile.name || profile.login}</h3>
          <p className="text-gray-500">{profile.bio}</p>
          <div className="flex justify-center gap-4 text-sm text-gray-700">
            <span>💼 {profile.public_repos} Repos</span>
            <span>👥 {profile.followers} Followers</span>
            <span>➡️ {profile.following} Following</span>
          </div>
          <Link
            to={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            Visit GitHub Profile
          </Link>
        </div>
      )}
    </div>
    </>
  );
};

export default Github;
