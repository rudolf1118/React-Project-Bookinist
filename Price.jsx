import React from "react";
import classes from "./Photo.module.css";

const Price = (props) =>{
    return (
        <div className={classes.price}>
            {props.price}
        </div>
    )
}
export default Price
