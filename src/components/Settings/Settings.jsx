import settings from "../../assets/icons/settings.svg";
import { IconContainer } from "../index";
import styles from "../../styles/Settings/Settings.module.css";
import Modal from "./Modal";
import { useState } from "react";
const Settings = () => {
  const [toggleModal , setToggleModal] = useState(true)
  const handlePress = () => {
   setToggleModal(prev => !prev)
  };
  return (
    <div className={styles.settingsContainer}>
    {toggleModal && <Modal />}
      <IconContainer
        handlePress={handlePress}
        icon={settings}
        tooltip={"settings"}
        alt={"Todo"}
        role="button"
      />
      {/* <p className="u-absolute"> Lorem, Ipsum</p> */}
    </div>
  );
};

export default Settings;
