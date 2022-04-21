import React from "react";
import ReactDOM, {createRoot} from "react-dom";
import App from "./App";
import classes from "./Photo.module.css"
// const rootElement =document.getElementById("root");
// const root = createRoot(rootElement)

 const book = [
     {
    img:"https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg",
    price:"6.99$",
    text:"Don't Push the Button! An Easter Surprise:",
    citat:"Bill Cotter "
},
     {
         img:"https://images-na.ssl-images-amazon.com/images/I/415gCVvwKlL._SX331_BO1,204,203,200_.jpg",
         price:"4.99$",
         text:"I Love You to the Moon and Back",
         citat:"Amelia Hepworth"
     },
     {
         img:"https://images-na.ssl-images-amazon.com/images/I/51ABc0hukNL._SX384_BO1,204,203,200_.jpg",
         price:"4.53$",
         text:"My First Learn-to-Write Workbook: Practice for Kids with Pen ",
         citat:"Crystal Radke"
     }
 ];

const Render = (props)=>{
return (
    <div className={classes.global} onMouseOver={()=>{console.log(props)}} >
        {book.map((books,index)=>{
            return <App key={index} {...books}/>
        })}


    </div>

)


}
ReactDOM.render(<Render/>, document.getElementById("root"))
