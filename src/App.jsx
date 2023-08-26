import { useContext, useInsertionEffect } from "react";
import { AppContext } from "./context/AppContext";

import { Header, Main, Footer } from "./components";

import { generateBackground } from "./utils/generateBackground";

import { day, night } from "./assets";
import styles from "./styles/App.module.css";

function App() {
  const { toggleOverlay, setToggleOverlay } = useContext(AppContext);
  const handleOverlayClick = () => {
    setToggleOverlay((prev) => !prev);
  };
  useInsertionEffect(() => {
    const url = generateBackground({ day, night });
    document.body.style.background = url;
  });
  return (
    <>
      <div
        onClick={handleOverlayClick}
        className={toggleOverlay ? "u-overlayActive" : "u-overlay"}
      ></div>
      <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
