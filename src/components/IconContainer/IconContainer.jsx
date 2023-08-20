import styles from "../../styles/IconContainer/IconContainer.module.css";

const IconContainer = ({
  handlePress,
  tooltip,
  icon,
  weather = false,
  role = "default",
  alt,
}) => {
  return role === "default" ? (
    <div
      role={role === "default" ? null : "button"}
      className={weather ? styles.containerWeather : styles.containerIcon}
      onClick={handlePress}
    >
      <img
        alt={alt}
        className={weather ? styles.weatherIcon : styles.icon}
        src={icon}
      />
      {/* {tooltip && (
            <p id="tooltip" className={styles.tooltip}>
              {tooltip}
            </p>
          )} */}
    </div>
  ) : (
    <button
      className={weather ? styles.containerWeather : styles.containerIcon}
      onClick={handlePress}
    >
      <img
        alt={alt}
        className={weather ? styles.weatherIcon : styles.icon}
        src={icon}
      />
      {/* {tooltip && (
      <p id="tooltip" className={styles.tooltip}>
        {tooltip}
      </p>
    )} */}
    </button>
  );
};

export default IconContainer;
