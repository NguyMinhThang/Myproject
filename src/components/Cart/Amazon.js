import React from "react";
import { list } from "../data";
import Cards from "./Cards";
import './Amazon.css';
const Amazon = () => {
    return (
        <section>
            { list.map((item) => (<Cards key={item.id} item={item} />))}
        </section>
    );
};
export default Amazon;