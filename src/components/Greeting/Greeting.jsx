import moment from "moment";
import React, { useState , useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../../styles/Greeting/Greeting.module.css";
const Greeting = () => {
  const {username , setUserName} = useContext(AppContext);
  const currentHour = moment().hour();

  const greeting =
    currentHour > 6 && currentHour < 12
      ? "Good Morning"
      : currentHour > 12 && currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const handleNameChange = (newName) => {
    setUserName(newName);
  };

  return (
    <h1 className={styles.greeting}>
      {greeting}, {username}
    </h1>
  );
};

export default Greeting;
