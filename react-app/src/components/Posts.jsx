import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import './Posts.css'

const Posts = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data;
        },
    });

    isLoading && toast("loading...")
    error && toast.error("error")
    console.log(data);
    return (
        <div>
        {data?.map(({ title, id, body}) => (
            <div key={id}>
                <h2 className="title">{id}.) {title}:</h2>
                <p className="body">{body}</p>
            </div>
        ))}
        </div>
    );
};

export default Posts;
