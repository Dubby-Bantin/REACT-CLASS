import "../styles/list2.css";
import { useParams } from "react-router-dom";
import { students } from "../data";

const StudentData = () => {
    const { id } = useParams();
    const StudentData = students.find((student) => student.id === id);
    return (
        <div>
        <p>{StudentData.firstName}</p>
        <p>{StudentData.lastName}</p>
        <p>{StudentData.age}</p>
        <p>{StudentData.state}</p>
        </div>
    );
};

export default StudentData;
