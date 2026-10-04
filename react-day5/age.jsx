function App() {
  const age = 21;

  return (
    <h1>
      {age >= 18 ? "You can vote" : "You cannot vote"}
    </h1>
  );
}

export default App;