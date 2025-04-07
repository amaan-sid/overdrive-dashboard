import { NavLink } from 'react-router-dom';

const CodeforcesNavbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6 shadow-lg rounded-b-lg">
      <NavLink to="/codeforces/compare" className="hover:text-blue-400">Compare Users</NavLink>
      <NavLink to="/codeforces/profile" className="hover:text-blue-400">User Profile</NavLink>
      <NavLink to="/codeforces/contests" className="hover:text-blue-400">Upcoming Contests</NavLink>
      <NavLink to="/codeforces/search-problem" className="hover:text-blue-400">Search Problem</NavLink>
      <NavLink to="/" className="ml-auto hover:text-green-400 font-semibold">🏠 Home</NavLink>
    </nav>
  );
};

export default CodeforcesNavbar;