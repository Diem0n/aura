import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Search,
  IconContainer,
  WeatherCardModal,
  FavouritesModal,
} from "../index";

import bookmark from "../../assets/icons/Bookmark.svg";
import thunderStorm from "../../assets/weather/thunderstorm.svg";

import styles from "../../styles/Header/Header.module.css";

const Header = () => {
  const { weather } = useContext(AppContext);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [showFavouritesModal, setShowFavouritesModal] = useState(false);
  
  const toggleWeatherModal = () => {
    setShowWeatherModal((prev)=> !prev);
  };
  
  const toggleFavouritesModal = () => {
    setShowFavouritesModal((prev) => !prev);
  };


  return (
    <header className={styles.container}>
      {showWeatherModal && <WeatherCardModal />}
      {showFavouritesModal && <FavouritesModal />}

      <div className={styles.iconContainer}>
        <IconContainer
          handlePress={toggleFavouritesModal}
          icon={bookmark}
          alt={"Favourites Icon"}
          role="button"
        />
        <Search />
      </div>

      <div onClick={toggleWeatherModal} className={styles.weatherCard}>
        <IconContainer
          handlePress={toggleWeatherModal}    
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
