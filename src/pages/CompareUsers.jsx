import React, { useState } from 'react';
import CodeforcesNavbar from '../components/CodeforcesNavbar';
const CompareUsers = () => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [info, setInfo] = useState(null);

  const fetchComparison = async () => {
    const res1 = await fetch(`https://codeforces.com/api/user.info?handles=${user1}`);
    const res2 = await fetch(`https://codeforces.com/api/user.info?handles=${user2}`);
    const data1 = await res1.json();
    const data2 = await res2.json();
    if (data1.status === 'OK' && data2.status === 'OK') {
      setInfo({ user1: data1.result[0], user2: data2.result[0] });
    }
  };

  return (
    <> 
    <CodeforcesNavbar></CodeforcesNavbar>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔁 Compare Two Users</h2>
      <div className="flex gap-4 mb-4">
        <input type="text" placeholder="User 1" onChange={(e) => setUser1(e.target.value)} className=" px-4 py-2 rounded-lg" />
        <input type="text" placeholder="User 2" onChange={(e) => setUser2(e.target.value)} className=" px-4 py-2 rounded-lg" />
        <button onClick={fetchComparison} className="bg-blue-600 px-4 py-2 rounded-lg">Compare</button>
      </div>
      {info && (
        <div className="grid grid-cols-2 gap-6">
          {[info.user1, info.user2].map((u, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl">
              <h3 className="text-xl font-bold">{u.handle}</h3>
              <p>Rating: {u.rating}</p>
              <p>Max Rating: {u.maxRating}</p>
              <p>Rank: {u.rank}</p>
              <p>Max Rank: {u.maxRank}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default CompareUsers;