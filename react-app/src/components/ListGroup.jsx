import "../styles/list.css";
import { useNavigate } from "react-router-dom";
const ListGroup = ({ list, title }) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/students/${id}`);
    };

    const listItem =
        list.length === 0 ? (
        <p>No Student Data </p>
        ) : (
        list.map((student, i) => (
            <li onClick={() => handleClick(student.id)} key={i}>
            {student.firstName} {student.lastName}
            </li>
        ))
        );

    return (
        <div className="parent">
        <h2>{title}</h2>
        <ul className="listParent">{listItem}</ul>
        </div>
    );
};

export default ListGroup;
