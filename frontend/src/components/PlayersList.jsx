    import { useState, useEffect } from "react";
    import PlayerService from "../services/service";
    import { Link } from "react-router-dom";

    export default function PlayersList() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = () => {
        PlayerService.getAllPlayers()
        .then((response) => setPlayers(response.data))
        .catch((error) => console.error("Error fetching players:", error));
    };

    const deletePlayer = (id) => {
        if (window.confirm("Are you sure you want to delete this player?")) {
        PlayerService.remove(id)
            .then(() => {
            alert("Player deleted successfully!");
            getPlayers();
            })
            .catch((error) => console.error("Error deleting player:", error));
        }
    };

    const handleSearch = (e) => {
        const name = e.target.value;
        setSearchTerm(name);

        if (name.trim() === "") {
        getPlayers(); 
        } else {
        PlayerService.searchPlayersByName(name)
            .then((res) => setPlayers(res.data))
            .catch((err) => console.error("Error searching players:", err));
        }
    };

    return (
        <div>
        <h4 className="mb-3">Players List</h4>

        <div className="mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Search players by name"
            value={searchTerm}
            onChange={handleSearch}
            />
        </div>

        <table className="table table-bordered table-hover">
            <thead className="table-dark">
            <tr>
                <th>Player ID</th>
                <th>Name</th>
                <th>Jersey Number</th>
                <th>Role</th>
                <th>Matches</th>
                <th>Team</th>
                <th>Country</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {players.length > 0 ? (
                players.map((player) => (
                <tr key={player.playerId}>
                    <td>{player.playerId}</td>
                    <td>{player.playerName}</td>
                    <td>{player.jerseyNumber}</td>
                    <td>{player.role}</td>
                    <td>{player.totalMatches}</td>
                    <td>{player.teamName}</td>
                    <td>{player.countryOrState}</td>
                    <td>{player.description}</td>
                    <td>
                    <Link
                        to={`/update/${player.playerId}`}
                        className="btn btn-primary btn-sm me-2"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => deletePlayer(player.playerId)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="9" className="text-center">
                    No players found
                </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
    }
