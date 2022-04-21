import React from "react";
import Photo from "./Photo";
import Text from "./Text";
import Rating from "./Rating";
import Price from "./Price";
import classes from "./Photo.module.css"
const App=(props)=>{
    console.log(props.book)
    const {img,price,text,citat}=props
    return (
        <div className={classes.rootter}>
            <Photo  img={img}/>
            <div className={classes.books}>
                <Text text={text} citat={citat}/>
                <Rating/>
                <Price price={price}/>
            </div>
        </div>
    )
}
export default App