import { useState } from "react";

function App() {
  const [student, setStudent] = useState("");

  return (
    <div>
      <h2>Student Name</h2>

      <input
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        placeholder="Enter student name"
      />

      <p>Student: {student}</p>
    </div>
  );
}

export default App;