import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);
import CodeforcesNavbar from '../components/CodeforcesNavbar';
const UserProfile = () => {
  const [handle, setHandle] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const fetchUser = async () => {
    const infoRes = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&count=1000`);
    const info = await infoRes.json();
    const subs = await subRes.json();
    if (info.status === 'OK') setUserInfo(info.result[0]);
    if (subs.status === 'OK') setSubmissions(subs.result);
  };

  const solvedByRating = {};
  const solvedByTag = {};

  submissions.forEach(sub => {
    if (sub.verdict === 'OK') {
      const rating = sub.problem.rating || 'Unrated';
      solvedByRating[rating] = (solvedByRating[rating] || 0) + 1;
      (sub.problem.tags || []).forEach(tag => {
        solvedByTag[tag] = (solvedByTag[tag] || 0) + 1;
      });
    }
  });

  return (
    <> 
    <CodeforcesNavbar />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔎 User Profile</h2>
      <div className="flex gap-4 mb-4">
        <input type="text" placeholder="Enter handle" onChange={(e) => setHandle(e.target.value)} className=" px-4 py-2 rounded-lg" />
        <button onClick={fetchUser} className="bg-blue-600 px-4 py-2 rounded-lg">Search</button>
      </div>
      {userInfo && (
        <div className="mb-6">
          <p><strong>{userInfo.handle}</strong> - {userInfo.rank} ({userInfo.rating})</p>
        </div>
      )}
      {submissions.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="mb-2">📊 Problems Solved by Rating</h3>
            <Bar data={{
              labels: Object.keys(solvedByRating),
              datasets: [{
                label: 'Problems Solved',
                data: Object.values(solvedByRating),
                backgroundColor: '#60a5fa'
              }]
            }} />
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="mb-2">🧩 Problems Solved by Tag</h3>
            <Pie data={{
              labels: Object.keys(solvedByTag),
              datasets: [{
                data: Object.values(solvedByTag),
                backgroundColor: [
                  '#60a5fa', '#f87171', '#34d399', '#fbbf24', '#a78bfa', '#fb7185', '#4ade80', '#facc15'
                ]
              }]
            }} />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default UserProfile;