import React from "react";
import styles from "../../styles/Footer/Footer.module.css";
import Quote from "../Quote/Quote";
import Settings from "../Settings/Settings";
import Todo from "../Todo/Todo";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Settings />
      <Quote />
      <Todo />
    </footer>
  );
};

export default Footer;
