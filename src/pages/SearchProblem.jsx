import React, { useEffect, useState } from 'react';
import CodeforcesNavbar from '../components/CodeforcesNavbar';
const SearchProblem = () => {
  const [query, setQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [problems, setProblems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const res = await fetch('https://codeforces.com/api/problemset.problems');
      const data = await res.json();
      if (data.status === 'OK') setProblems(data.result.problems);
    };
    fetchProblems();
  }, []);

  const search = () => {
    const results = problems.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(query.toLowerCase());
      const ratingMatch = ratingFilter ? p.rating === parseInt(ratingFilter) : true;
      return nameMatch && ratingMatch;
    });
    setFiltered(results);
  };

  return (
    <>
    <CodeforcesNavbar />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔍 Search Problem by Name</h2>
      <div className="flex gap-4 mb-4">
        <input type="text" placeholder="Enter problem name" onChange={(e) => setQuery(e.target.value)} className=" px-4 py-2 rounded-lg" />
        <button onClick={search} className="bg-blue-600 px-4 py-2 rounded-lg">Search</button>
      </div>
      <ul className="space-y-3">
        {filtered.map((p, idx) => (
          <li key={idx} className="bg-gray-800 p-4 rounded-xl">
            <p><strong>{p.name}</strong> ({p.rating || 'Unrated'})</p>
            <p>Tags: {p.tags.join(', ')}</p>
            <a
              href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
              target="_blank"
              className="text-blue-400 underline"
              rel="noreferrer"
            >
              Open Problem ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SearchProblem;
