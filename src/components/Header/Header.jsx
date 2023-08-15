import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Search, IconContainer, WeatherCardModal } from "../index";

import bookmark from "../../assets/icons/Bookmark.svg";
import thunderStorm from "../../assets/weather/thunderstorm.svg";

import styles from "../../styles/Header/Header.module.css";

const Header = () => {
  const { weather } = useContext(AppContext);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const handleWeatherCardClick = () => {
    setShowWeatherModal(!showWeatherModal);
  };

  return (
    <header className={styles.container}>
      {showWeatherModal && <WeatherCardModal />}
      <div className={styles.iconContainer}>
        <IconContainer
          handlePress={() => {
            console.log("pressed");
          }}
          icon={bookmark}
          tooltip={"Bookmarks"}
          alt={"Bookmarks"}
        />
        <Search />
      </div>

      <div onClick={handleWeatherCardClick} className={styles.weatherCard}>
        <IconContainer
          handlePress={handleWeatherCardClick}
          icon={thunderStorm}
          tooltip={"weather"}
          weather={true}
          alt={"weather"}
        />
        <div className={styles.weatherStats}>
          <h2>{weather?.temp}&deg;</h2>
          <p>{weather?.description}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
