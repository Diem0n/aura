import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import styles from "../../styles/Greeting/Greeting.module.css";
const Greeting = () => {
  const { username, setUserName } = useContext(AppContext);
  const date = new Date();
  const currentHour = date.getHours();
  const greeting =
    currentHour > 6 && currentHour < 12
      ? "Good Morning"
      : currentHour >= 12 && currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const handleNameChange = (newName) => {
    setUserName(newName);
  };

  return (
    <div className={styles.greeting}>
      <h1>{greeting}</h1>
      <h1>, {username}</h1>
    </div>
  );
};

export default Greeting;
