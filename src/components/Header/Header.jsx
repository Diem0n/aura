import React, { useContext, useState } from "react";
import IconContainer from "../IconContainer/IconContainer";
import WeatherCardModal from "../WeatherCardModal/WeatherCardModal";
import styles from "../../styles/Header/Header.module.css";

import bookmark from "../../assets/icons/Bookmark.svg";
import search from "../../assets/icons/Search.svg";

import mostlyClouds from "../../assets/weather/mostly-clouds-day.png";

import { AppContext } from "../../context/AppContext";
const Header = () => {
  const { weather } = useContext(AppContext);
  const [showWeatherModal, setShowWeatherModal] = useState(true);
  const handleWeatherCardClick = () =>{
    setShowWeatherModal(!showWeatherModal);
  }

  return (
    <div className={styles.container}>
      {showWeatherModal && <WeatherCardModal />}
      <div className={styles.iconContainer}>
        <IconContainer
          handlePress={() => {
            console.log("pressed");
          }}
          icon={bookmark}
          tooltip={"Bookmarks"}
        />
        <IconContainer
          handlePress={() => {
            console.log("pressed");
          }}
          icon={search}
          tooltip={"Search"}
        />
      </div>

      <div onClick={handleWeatherCardClick} className={styles.weatherCard}>
        <IconContainer
          handlePress={handleWeatherCardClick}
          icon={mostlyClouds}
          tooltip={"weather"}
          weather={true}
        />
        <div className={styles.weatherStats}>
          <h2>{weather.temp}&deg;</h2>
          <p>{weather.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
