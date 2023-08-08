import React from "react";
import IconContainer from "../IconContainer/IconContainer";
import styles from "../../styles/Header/Header.module.css";

import bookmark from "../../assets/icons/Bookmark.svg";
import search from "../../assets/icons/Search.svg";

import mostlyClouds from "../../assets/weather/mostly-clouds-day.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <IconContainer
          handlePress={() => {
            console.log("pressed");
          }}
          icon={bookmark}
          tooltip={"Bookmarks"}
        />
        <IconContainer
          handlePress={() => {
            console.log("pressed");
          }}
          icon={search}
          tooltip={"Search"}
        />
      </div>

      <div className={styles.weatherCard}>
        <IconContainer
          handlePress={() => {
            console.log("pressed");
          }}
          icon={mostlyClouds}
          tooltip={"weather"}
          weather={true}
        />
        <div className={styles.weatherStats}>
          <h2>24&deg; C</h2>
          <p>Mostly cloudy</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
