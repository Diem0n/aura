import { useContext, useInsertionEffect } from "react";
import { AppContext } from "./context/AppContext";
import styles from "./styles/App.module.css";

import day from "./assets/backgrounds/day.png";
import night from "./assets/backgrounds/night.png";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { generateBackground } from "./utils/generateBackground";
function App() {
  const { toggleOverlay, setToggleOverlay } = useContext(AppContext);
  const handleOverlayClick = () =>{
    setToggleOverlay((prev) => !prev)
  }
  useInsertionEffect(() => {
    const url = generateBackground({ day, night });
    document.body.style.background = url;
  });
  return (
    <>
      <div
        onClick={handleOverlayClick}
        className={toggleOverlay ? 'u-overlayActive' : 'u-overlay'}
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
