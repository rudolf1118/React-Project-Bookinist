import React from "react";
import classes from "./Photo.module.css";

const Text = (props)=>{
    return (
        <article className={classes.text} >
            <div className={classes.text1}>{props.text}</div>
            <div className={classes.text2}> {props.citat}</div>
        </article>
    )
}
export default Text