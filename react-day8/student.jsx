function App() {
  const students = [
    { id: 1, name: "Mithilesh", marks: 87 },
    { id: 2, name: "Rahul", marks: 72 },
    { id: 3, name: "Amit", marks: 91 },
    { id: 4, name: "Rohan", marks: 65 }
  ];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Marks: {student.marks}</p>

          <p>
            Status:{" "}
            {student.marks >= 75
              ? "Excellent"
              : student.marks >= 60
              ? "Good"
              : "Needs Improvement"}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;