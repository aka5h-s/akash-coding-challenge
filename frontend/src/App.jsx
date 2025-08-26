import { Routes, Route, Link, NavLink,Navigate } from "react-router-dom";
import PlayersList from "./components/PlayersList";
import AddPlayer from "./components/AddPlayer";
import UpdatePlayer from "./components/UpdatePlayer";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
  <a href="/players" className="navbar-brand px-3">Cricket Team Management</a>
  <div className="navbar-nav mr-auto">
    <li className="nav-item">
      <NavLink to="/players" className="nav-link">Players</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/add" className="nav-link">Add Player</NavLink>
    </li>
  </div>
</nav>




      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/players" replace />} />
          <Route path="/players" element={<PlayersList />} />
          <Route path="/add" element={<AddPlayer />} />
          <Route path="/update/:id" element={<UpdatePlayer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
