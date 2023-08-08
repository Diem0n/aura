import React from "react";
import styles from "../../styles/IconContainer/IconContainer.module.css";
const IconContainer = ({ handlePress, tooltip, icon, weather }) => {
  return (
    <div className={styles.container} onClick={handlePress}>
      <img className={weather ? styles.weatherIcon : styles.icon} src={icon} />
      {tooltip && <p className={styles.tooltip}>{tooltip}</p>}
    </div>
  );
};

export default IconContainer;
