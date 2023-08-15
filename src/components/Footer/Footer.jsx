import { Quote, Settings, Todo } from "../index";
import styles from "../../styles/Footer/Footer.module.css";
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
