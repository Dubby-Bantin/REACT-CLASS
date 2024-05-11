import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const Products = () => {
    const { products } = useContext(AppContext);
    return (
        <div>
        <ul>
            {products.map((product, i) => (
            <li key={i}>{product}</li>
            ))}
        </ul>
        </div>
    );
};

export default Products;
