function App() {
  const players = [
    { id: 1, name: "Virat", runs: 85 },
    { id: 2, name: "Rohit", runs: 62 },
    { id: 3, name: "Gill", runs: 45 }
  ];

  return (
    <div>
      <h1>Cricket Scoreboard</h1>

      {players.map((player) => (
        <p key={player.id}>
          {player.name} - {player.runs} runs
        </p>
      ))}
    </div>
  );
}

export default App;