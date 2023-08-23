import { useState } from "react";
import styles from "../../styles/Switch/Switch.module.css";
const Switch = ({ checked, onChange, label }) => {
  return (
    <div onClick={onChange} className={styles.switchContainer}>
      <h2 role='button' aria-label="toggle weather" className={styles.label}>{label}</h2>
      <button  className={checked? styles.switchActive : styles.switchInactive}></button>
    </div>
  );
};

export default Switch;
