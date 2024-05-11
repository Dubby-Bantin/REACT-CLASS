import { useState } from "react";
import "../../styles/studentData.css";

const StudentInfo = () => {
    const students = {
        fName: "Dubby",
        lName: "Bantin",
        age: 17,
        state: "Enugu",
        subjects: {
        english: 79,
        maths: 85,
        chemistry: 70,
        physics: 88,
        },
    };

    const [studentData, setStudentData] = useState(students);

    const updateData = () => {
        const newState = {
        ...studentData,
        subjects: { ...studentData.subjects, english: 0 },
        };
        setStudentData(newState);
    };
    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
        }}
        >
        <p>Firstname: {studentData.fName}</p>
        <p>LastName: {studentData.lName}</p>
        <p>Age: {studentData.age}</p>
        <p>State: {studentData.state}</p>
        <p>English Score: {studentData.subjects.english}</p>
        <p>Math Score: {studentData.subjects.maths}</p>
        <p>Chemistry Score: {studentData.subjects.chemistry}</p>
        <p>Physics Score: {studentData.subjects.physics}</p>
        <button onClick={updateData}>Change State</button>
        </div>
    );
};

export default StudentInfo;
