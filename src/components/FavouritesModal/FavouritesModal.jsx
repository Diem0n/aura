import React, { useState } from "react";
import Create from "./Create";
import styles from "../../styles/FavouritesModal/FavouritesModal.module.css";
const FavouritesModal = () => {
  return (
    <div className={styles.favouritesModalContainer}>
     <Create />
    </div>
  );
};

export default React.memo(FavouritesModal);
