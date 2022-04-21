import React from "react";
import classes from "./Photo.module.css";
const Rating = (props)=>{
    return (
        <article className={classes.rating}>
            Rating:{((Math.floor(Math.random() * 1000)) + "")}
        </article>
    )
}
export default Rating