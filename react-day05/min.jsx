function App() {
  const isLoggedIn = true;
  const isAdmin = true;

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>
        {isLoggedIn
          ? "Welcome, Mithilesh!"
          : "Please Login"}
      </h2>

      {isAdmin && <button>Admin Panel</button>}
    </div>
  );
}

export default App;