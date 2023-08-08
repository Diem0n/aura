import moment from "moment";
import React, { useState } from "react";
import styles from "../../styles/Greeting/Greeting.module.css";
const Greeting = () => {
  const [name, setName] = useState("Xero");
  const currentHour = moment().hour();
  const greeting =
    currentHour > 6 && currentHour < 12
      ? "Good Morning"
      : currentHour > 12 && currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <h1 className={styles.greeting}>
      {greeting}, {name}
    </h1>
  );
};

export default Greeting;
