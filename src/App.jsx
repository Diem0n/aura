import moment from "moment";
import { useState, useEffect } from "react";

import styles from "./styles/App.module.css";

import day from "./assets/backgrounds/day.png";
import night from "./assets/backgrounds/night.png";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    const currentHour = moment().hour();
    const isDayTime = currentHour > 6 && currentHour < 18 ? true : false;
    document.body.style.backgroundImage = `url(${isDayTime ? day : night})`;
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
