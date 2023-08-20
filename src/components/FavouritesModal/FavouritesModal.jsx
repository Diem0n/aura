import React, { useState } from "react";
import styles from "../../styles/FavouritesModal/FavouritesModal.module.css";
const FavouritesModal = () => {
  return (
    <div className={styles.favouritesModalContainer}>
      <h1>Favourites</h1>
    </div>
  );
};

export default React.memo(FavouritesModal);
