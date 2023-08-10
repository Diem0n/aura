
import styles from "../../styles/IconContainer/IconContainer.module.css";

const IconContainer = ({ handlePress, tooltip, icon, weather=false}) => {
  return (
    <div className={weather ? '' : styles.containerIcon} onClick={handlePress}>
      <img className={weather ? styles.weatherIcon : styles.icon} src={icon} />
      {tooltip && <p className={styles.tooltip}>{tooltip}</p>}
    </div>
  );
};

export default IconContainer;
