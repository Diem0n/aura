import React from "react";
import Clock from "../Clock/Clock";
import Greeting from "../Greeting/Greeting";
import Goal from "../Goal/Goal";

const Main = () => {
    return (
       <div>
           <Clock />
           <Greeting />
           <Goal />
       </div>
    )
}

export default Main;
