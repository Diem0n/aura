import React, { useContext, useState } from "react";
import IconContainer from "../IconContainer/IconContainer";
import WeatherCardModal from "../WeatherCardModal/WeatherCardModal";
import styles from "../../styles/Header/Header.module.css";

import bookmark from "../../assets/icons/Bookmark.svg";



import thunderStorm from "../../assets/weather/thunderstorm.svg"
import { AppContext } from "../../context/AppContext";
import Search from "../Search/Search";
const Header = () => {
  const { weather } = useContext(AppContext);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
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
        <Search />
      
      </div>

      <div onClick={handleWeatherCardClick} className={styles.weatherCard}>
        <IconContainer
          handlePress={handleWeatherCardClick}
          icon={thunderStorm}
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
