import React, { useEffect, useState } from 'react';
import CodeforcesNavbar from '../components/CodeforcesNavbar';

const UpcomingContests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      const res = await fetch('https://codeforces.com/api/contest.list');
      const data = await res.json();
      if (data.status === 'OK') {
        const upcoming = data.result.filter(c => c.phase === 'BEFORE');
        setContests(upcoming.slice(0, 10));
      }
    };
    fetchContests();
  }, []);

  return (
    <> 
    <CodeforcesNavbar />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📅 Upcoming Contests</h2>
      <ul className="space-y-4">
        {contests.map((contest, idx) => (
          <li key={idx} className="bg-gray-800 p-4 rounded-xl">
            <p><strong>{contest.name}</strong></p>
            <p>Start: {new Date(contest.startTimeSeconds * 1000).toLocaleString()}</p>
            <p>Duration: {contest.durationSeconds / 3600} hours</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default UpcomingContests;
