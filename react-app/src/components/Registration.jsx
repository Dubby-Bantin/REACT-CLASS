import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { AppContext } from "../App";

const Registration = () => {
    const {setUser} = useContext(AppContext)
    const schema = yup.object({
        firstname: yup.string().min(3).required(),
        lastname: yup.string().min(3).required(),
        email: yup.string().email(3).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const handleFormSubmit = (data) => {
        setUser(data);
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
            <div>
            <label htmlFor="email">First name</label>
            <input type="text" id="firstname" {...register("firstname")} />
            {errors.firstname && toast.error(errors.firstname.message)}
            </div>

            <div>
            <label htmlFor="email">Last name</label>
            <input type="text" id="lastname" {...register("lastname")} />
            {errors.lastname ? toast.error(errors.lastname.message) : ""}
            </div>

            <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email")} />
            {errors.email ? toast.error(errors.email.message) : ""}
            </div>

            <button>Submit</button>
        </form>
        </div>
    );
};

export default Registration;
