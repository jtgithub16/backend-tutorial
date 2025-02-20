import { useState, useEffect } from "react";

export default function About() {
  // State for student info
  const [student, setStudent] = useState({
    firstName: "John",
    lastName: "Doe",
    resume: null, // Placeholder for resume URL
    major: "Computer Science",
    graduationYear: "2025",
  });

  // Placeholder for Firebase call (to be implemented)
  useEffect(() => {
    // TODO: Fetch student data from Firebase and update state
    // Example:
    // fetchStudentFromFirebase().then(data => setStudent(data));
  }, []);

  return (
    <div className="about-container">
      <h1>About the Student</h1>
      <p>
        <strong>Name:</strong> {student.firstName} {student.lastName}
      </p>
      <p>
        <strong>Major:</strong> {student.major}
      </p>
      <p>
        <strong>Graduation Year:</strong> {student.graduationYear}
      </p>
      <p>
        <strong>Resume:</strong>{" "}
        {student.resume ? (
          <a href={student.resume} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        ) : (
          "Not uploaded yet"
        )}
      </p>
      <p>This page will be updated once Firebase integration is complete.</p>
    </div>
  );
}
