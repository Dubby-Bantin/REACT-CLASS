import React, { useRef, useState } from "react";
import "../styles/login.css";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/ReactToastify.css';

const Login = () => {
    // const firstname = useRef(null);
    // const lastname = useRef(null);
    // const age = useRef(null);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // const user = {
        //     firstname:firstname?.current.value,
        //     lastname:lastname?.current.value,
        //     age:age?.current.value
        // }

        console.log(user);
    };
    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                    }
                />
            </div>

            <div>
                <label htmlFor="lastname">Password</label>
                <input
                    type="text"
                    id="lastname"
                    onChange={(event) =>
                    setUser({ ...user, password: event.target.value })
                    }
                />
            </div>
            <button>Submit</button>
        </form>
        </div>
    );
};

export default Login;
