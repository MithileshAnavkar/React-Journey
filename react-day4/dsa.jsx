function App() {
  const marks = 85;

  if (marks >= 80) {
    return <h1>Excellent</h1>;
  }

  if (marks >= 60) {
    return <h1>Good</h1>;
  }

  return <h1>Needs Improvement</h1>;
}

export default App;