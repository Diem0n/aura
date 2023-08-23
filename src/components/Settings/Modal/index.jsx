import { useState } from "react";
import styles from "../../../styles/Settings/Settings.module.css";
import { Switch } from "../../index";
import General from "../General";
import Todo from "../Todo";
import Mantras from "../Mantras";
import Photos from "../Photos";
import Quotes from "../Quotes";
import Links from "../Links";
const Modal = () => {
  const [activeNavigator , setActiveNavigator] = useState(<General/>);
  const navigators = [
    {
      label: "General",
      component: <General/>,
    },
    {
      label: "Todo",
      component: <Todo/>,
    },
    {
      label: "Mantras",
      component: <Mantras/>,
    },
    {
      label: "Photos",
      component: <Photos/>,
    },
    {
      label: "Quotes",
      component: <Quotes/>,
    },
    {
      label: "Links & Booksmarks",
      component: <Links/>,
    },
  ];
  const handleNavigatorPress = (navigator) => {
    setActiveNavigator(navigator.component)
  }
  const renderNavigation = () => {
    return navigators.map((navigator, index) => {
      return (
        <button onClick={()=>handleNavigatorPress(navigator)} key={index}>
          {navigator.label}
        </button>
      );
    });
  };

  return (
    <div className={styles.settingsModal}>
      <div className={styles.navigator}>{renderNavigation()}</div>
      <span className={styles.divider} />
      <div className={styles.navigatorContent}>
       {activeNavigator}
     
      </div>
    </div>
  );
};

export default Modal;
