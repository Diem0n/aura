import "./App.css";
import { useLayoutEffect } from "react";
import Quote from "./components/Quote";
import FavSites from "./components/FavSites";
import Clock from "./components/Clock";
import DayGoal from "./components/DayGoal";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";

function App() {
  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, transparent 0%,transparent 50%,red 50%,red 100%)";
  });
  return (
    <>
      <div className="grid grid-cols-4"></div>
    </>
  );
}

export default App;
