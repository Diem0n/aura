import moment from "moment";
import {  useEffect } from "react";

import styles from "./styles/App.module.css";

import day from "./assets/backgrounds/day.png";
import night from "./assets/backgrounds/night.png";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { parseWeatherData } from "./services/getWeather";
import { generateBackground } from "./utils/generateBackground";
function App() {
  useEffect(() => {
   const url = generateBackground({day , night});
   
    document.body.style.background = url;

  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
