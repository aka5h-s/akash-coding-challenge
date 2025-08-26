import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlayerService from "../services/service";

export default function UpdatePlayer() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    PlayerService.getAllPlayers()
      .then((response) => {
        const found = response.data.find((p) => String(p.playerId) === String(id));
        if (found) {
          setPlayer(found);
        } else {
          alert("Player not found!");
          navigate("/players");
        }
      })
      .catch((error) => {
        console.error("Error loading player:", error);
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PlayerService.updatePlayer(id, player)
      .then(() => {
        alert("Player updated successfully!");
        navigate("/players");
      })
      .catch((error) => {
        console.error("Error updating player:", error);
        alert("Failed to update player!");
      });
  };

  return (
    <div>
      <h4 className="mb-3">Update Player</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Player ID</label>
          <input
            type="number"
            className="form-control"
            name="playerId"
            value={player.playerId}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Player Name</label>
          <input
            type="text"
            className="form-control"
            name="playerName"
            value={player.playerName || ""}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Jersey Number</label>
          <input
            type="number"
            className="form-control"
            name="jerseyNumber"
            value={player.jerseyNumber || ""}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            name="role"
            value={player.role || ""}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Role --</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="All Rounder">All Rounder</option>
            <option value="Keeper">Keeper</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Total Matches</label>
          <input
            type="number"
            className="form-control"
            name="totalMatches"
            value={player.totalMatches || ""}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input
            type="text"
            className="form-control"
            name="teamName"
            value={player.teamName || ""}
            onChange={handleChange}
            maxLength="30"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Country / State</label>
          <input
            type="text"
            className="form-control"
            name="countryOrState"
            value={player.countryOrState || ""}
            onChange={handleChange}
            maxLength="30"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={player.description || ""}
            onChange={handleChange}
            maxLength="100"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Player
        </button>
      </form>
    </div>
  );
}
