import { Route, Routes, BrowserRouter as Router  } from "react-router-dom"
import Body from "./components/Body"
import Weather from "./components/Weather"
import Github from "./components/GitHub"
import CompareUsers from "./pages/CompareUsers"
import UserProfile from "./pages/UserProfile"
import UpcomingContests from "./pages/Contests"
import SearchProblem from "./pages/SearchProblem"
import CodeforcesNavbar from "./components/CodeforcesNavbar"

function App() {

  return (
     <>
     <Router>
      <Routes>
        <Route path="/" element = {<Body />} />
        <Route path="/weather" element= {<Weather />} />
        <Route path="/github" element= {<Github />} />
        <Route path="/codeforces" element={<CodeforcesNavbar />} />
        <Route path="/codeforces/compare" element={<CompareUsers />} />
          <Route path="/codeforces/profile" element={<UserProfile />} />
          <Route path="/codeforces/contests" element={<UpcomingContests />} />
          <Route path="/codeforces/search-problem" element={<SearchProblem />} />
        <Route />
      </Routes>
     </Router>
      </>
  )
}

export default App
