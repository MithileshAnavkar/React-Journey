function App() {
  const isLoggedIn = false;
  const isAdmin = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome User</h1>
      ) : (
        <h1>Please Login</h1>
      )}

      {isLoggedIn && isAdmin && (
        <button>Admin Dashboard</button>
      )}
    </div>
  );
}

export default App;