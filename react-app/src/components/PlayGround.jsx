import { useState } from "react";
import "../styles/playGround.css";

const PlayGround = () => {
  const [players, setPlayers] = useState([
    "messi",
    "ronaldo",
    "jude",
    "Kelvin",
    "Jude",
  ]);

  const addPlayers = () => {
    setPlayers([...players, "hazard"]);
  };

  const [players2, setPlayers2] = useState([
    { id: 1, name: "Rashford", club: "Manchester United" },
    { id: 2, name: "Messi", club: "Manchester United" },
    { id: 3, name: "Jude", club: "Manchester United" },
    { id: 4, name: "Haaland", club: "Manchester United" },
    { id: 5, name: "Ronaldo", club: "Manchester United" },
  ]);

  const updateClub = () => {
    const newClub = players2.map((player) => {
      return player.id === 4 ? { ...player, club: "Manchester City" } : player;
    });

    setPlayers2(newClub);
  };

  const removePlayer = () => {
    const newPlayers = players.filter((player) => player !== "Kelvin");
    setPlayers(newPlayers);
  };

  const updatePlayer = () => {
    const newPLayer = players.map((player) =>
      player === "Jude" ? "Mustialla" : player
    );

    setPlayers(newPLayer);
  };

  return (
    <div className="playerContainer">
      {players.map((player, i) => (
        <p key={i}>{player}</p>
      ))}
      <button onClick={addPlayers}>Add Player</button>
      <button onClick={removePlayer}>Remove Player</button>
      <button onClick={updatePlayer}>Update jude</button>

      {players2.map(({ id, name, club }) => (
        <p key={id}>
          {name}........{club}
        </p>
      ))}
      <button onClick={updateClub}>Update Player</button>
    </div>
  );
};

export default PlayGround;
