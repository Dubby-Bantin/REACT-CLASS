import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios
    //     .get("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => setUsers(res.data))
    //     .catch((err) => toast.error(err.message));
    // }, []);

    // fetching data
    useEffect(() => {
        try {
        const fetchData = async () => {
            const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(res.data);
            setLoading(false);
            res.status === 200 && toast.success("success");
        };
        fetchData();
        } catch (err) {
        toast.error(err.message);
        }
    }, []);

    const handleNewUser = () => {
        const newUser = {
        id: users.length + 2,
        name: "Dubby",
        email: "dubbybantin@gmail.com",
        phone: "1-463-123-4447",
        };

        axios
        .post(`https://jsonplaceholder.typicode.com/users`, { data: newUser })
        .then((res) => setUsers([newUser, ...users]));
    };

    // deleting data
    const handleDelete = (id) => {
        let newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
        axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => console.log(res.data))
        .catch((e) => toast.error(e));
    };

    const handleUpdate = (user) => {
        // u can use patch or put to update user data
        const updatedUsers = users.map((newUser) => {
        if (newUser.id == user.id) {
            return { ...newUser, name: "Donald Smith" };
        } else {
            return newUser;
        }
        });
        setUsers(updatedUsers);
        // updating data
        const newUserData = { ...users, name: "Donald Smith" };
        axios
        .patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, newUserData)
        .then((res) => console.log(res.data))
        .catch((e) => toast.error(e));
    };

    return (
        <>
        <button onClick={handleNewUser}>Add user</button>
        {isLoading && <p>...loading</p>}
        <table cellSpacing="0">
            <thead>
            <tr>
                <th>S/n</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>

            <tbody>
            {users.length > 0 &&
                users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                    <button
                        onClick={() => handleDelete(user.id)}
                        className="deleteBtn"
                    >
                        Delete
                    </button>
                    </td>
                    <td>
                    <button
                        onClick={() => handleUpdate(user.id)}
                        className="deleteBtn"
                    >
                        Update
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};

export default Users;
