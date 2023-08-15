import styles from "../../styles/IconContainer/IconContainer.module.css";

const IconContainer = ({ handlePress, tooltip, icon, weather = false , alt}) => {
  return (
    <div
      className={weather ? styles.containerWeather : styles.containerIcon}
      onClick={handlePress}
    >
      <img alt={alt} className={weather ? styles.weatherIcon : styles.icon} src={icon} />
      {tooltip && (
        <p id="tooltip" className={styles.tooltip}>
          {tooltip}
        </p>
      )}
    </div>
  );
};

export default IconContainer;
