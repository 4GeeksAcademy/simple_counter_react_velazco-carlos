//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let digito1= 0;
//render your react application
setInterval(()=>{
    digito1++;
    ReactDOM.render(<Home digito1={digito1}/>, document.querySelector("#app"))}, 1000);

