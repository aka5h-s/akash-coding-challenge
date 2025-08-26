import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../services/service";

export default function AddPlayer() {
  const [player, setPlayer] = useState({
    playerId: "",
    playerName: "",
    jerseyNumber: "",
    role: "",
    totalMatches: "",
    teamName: "",
    countryOrState: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!e.target.checkValidity()) {
      return;
    }

    e.preventDefault(); 

    PlayerService.addPlayer(player)
      .then(() => {
        alert("Player added successfully!");
        navigate("/players");
      })
      .catch((error) => {
        console.error("Error adding player:", error);
        alert("Failed to add player! Please check your inputs.");
      });
  };

  return (
    <div>
      <h4 className="mb-3">Add New Player</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Player ID</label>
          <input
            type="number"
            className="form-control"
            name="playerId"
            value={player.playerId}
            onChange={handleChange}
            required
            min="1"
            placeholder="Enter Player ID"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Player Name</label>
          <input
            type="text"
            className="form-control"
            name="playerName"
            value={player.playerName}
            onChange={handleChange}
            required
            minLength="2"
            placeholder="Enter Player Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Jersey Number</label>
          <input
            type="number"
            className="form-control"
            name="jerseyNumber"
            value={player.jerseyNumber}
            onChange={handleChange}
            required
            min="0"
            placeholder="Enter Jersey Number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            name="role"
            value={player.role}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Role --</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="AllRounder">All Rounder</option>
            <option value="Keeper">Keeper</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Total Matches</label>
          <input
            type="number"
            className="form-control"
            name="totalMatches"
            value={player.totalMatches}
            onChange={handleChange}
            required
            min="0"
            placeholder="Enter Total Matches"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input
            type="text"
            className="form-control"
            name="teamName"
            value={player.teamName}
            onChange={handleChange}
            required
            maxLength="30"
            placeholder="Enter Team Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Country / State</label>
          <input
            type="text"
            className="form-control"
            name="countryOrState"
            value={player.countryOrState}
            onChange={handleChange}
            required
            maxLength="30"
            placeholder="Enter Country or State"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={player.description}
            onChange={handleChange}
            maxLength="2000"
            placeholder="Enter Description (Optional)"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Save Player
        </button>
      </form>
    </div>
  );
}
