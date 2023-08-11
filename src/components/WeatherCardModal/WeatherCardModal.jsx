import { AppContext } from "../../context/AppContext";
import { useState , useContext} from "react";

import styles from "../../styles/WeatherCardModal/WeatherCardModal.module.css";

import mostlyCloudy from '../../assets/weather/mostly-clouds-day.png'
import wind from '../../assets/icons/wind.svg';
import temp from '../../assets/icons/temp.svg';
import umbrella from '../../assets/icons/umbrella.svg';
import IconContainer from "../IconContainer/IconContainer";

const WeatherCardModal = () => {
  const {weather} = useContext(AppContext)
  return (
    <div className={styles.container}>
      <h1>{weather?.city ?? 'N/A'}</h1>
      <p>{weather?.description ?? 'N/A'}</p>
      <div className="u-row">
        <img className={styles.weatherIcon} src={mostlyCloudy} />
        <h1 className={styles.tempLabel}>{weather?.temp ?? 'N/A'}&deg;</h1>
      </div>
      <div className={styles.weatherStats}>
        <div className={styles.weatherStat}>
          <IconContainer tooltip={'Wind Speed'} icon={wind}/>
          <p>{weather?.windSpeed ?? 'N/A'} m/s</p>
        </div>
        <div className={styles.weatherStat}>
          <IconContainer tooltip={'Max Temp'} icon={temp}/>
          <p>{weather?.maxTemp ?? 'N/A'} &deg;</p>
        </div>
        <div className={styles.weatherStat}>
          <IconContainer tooltip={'Humidity'} icon={umbrella}/>
          <p>{weather?.humidity ?? 'N/A'} %</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCardModal;
