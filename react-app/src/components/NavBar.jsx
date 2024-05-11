import { Link } from "react-router-dom";
import "../styles/navBar.css";
import logo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useContext } from "react";
import { AppContext } from "../App";
const Navbar = () => {
    const {products} = useContext(AppContext)
    return (
        <div className="header">
        <Link to="/" className="reactLogo">
            <img src={logo} alt="" />
        </Link>

        <ul>
            <Link to="/students" className="link">
            students
            </Link>

            <Link to="/playground" className="link">
            Playground
            </Link> 

            <Link to="/Message" className="link">
            Message
            </Link>

            <Link to="/users" className="link">
            Users
            </Link>

            <Link to="/login" className="link">
            Login
            </Link>

            <Link to="/dashboard" className="link">
            Dashboard
            </Link>

            <Link to="/registration" className="link">
            Sign Up
            </Link>


            <Link to="/Posts" className="link">
            Posts
            </Link>
            <Link to="/studentInfo" className="link">
            Student Info
            </Link>
            <Link to="/Page" className="link">
            Products({products.length})
            </Link>
        </ul>

        <Link to="/">
            <img src={viteLogo} alt="" />
        </Link>
        </div>
    );
};

export default Navbar;
