import React from "react";
import Home from "./home";

const SecondsCounter = ({seconds}) => {
    let hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour.toString() : hour.toString();
    let minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute.toString() : minute.toString();
    let second = seconds % 60;
    second = (second < 10)? '0' + second.toString() : second.toString();
  
    return (
    
    // <div className="text-white bg-dark">
    
    // <h1> <i class="fa fa-clock"></i> {hour[0]} {hour[1]}   {minute[0]} {minute[1]}   {second[0]} {second[1]}</h1>
    // </div>


<div className="d-flex  text-white bg-dark justify-content-center gap-3  " >
    <h1><i class="fa  fa-clock bg-secondary bg-opacity-10 rounded" style={{width: "70px", height:"60px"}}></i></h1>
    <h1 className="bg-secondary bg-opacity-10 rounded" style={{width: "70px", height:"60px"}}>{hour[0]}</h1> 
    <h1 className="bg-secondary bg-opacity-10 rounded " style={{width: "70px", height:"60px"}}>{hour[1]}</h1> 
    <h1 className="bg-secondary bg-opacity-10 rounded" style={{width: "70px", height:"60px"}}>{minute[0]}</h1> 
    <h1 className="bg-secondary bg-opacity-10 rounded" style={{width: "70px", height:"60px"}}>{minute[1]}</h1>
    <h1 className="bg-secondary bg-opacity-10 rounded" style={{width: "70px", height:"60px"}}>{second[0]}</h1>
    <h1 className="bg-secondary bg-opacity-10 rounded" style={{width: "70px", height:"60px"}} >{second[1]}</h1>
    
</div>

);
    };

export default SecondsCounter;


