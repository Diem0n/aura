import "./App.css";
import React, { useEffect, useState } from "react";
import Quote from "./components/Quote";
import FavSites from "./components/FavSites";
import Clock from "./components/Clock";
import DayGoal from "./components/DayGoal";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import day from "./images/day.jpg";
import night from "./images/night.jpg";

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    if (new Date().getHours() >= 6 && new Date().getHours() <= 18) {
      console.log("day", new Date().getHours());
      document.body.style.backgroundImage = `url('${day}')`;
    } else {
      console.log("night", new Date().getHours());
      document.body.style.backgroundImage = `url('${night}')`;
    }
    const fetchCoords = async () => {
      await navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    };

    const fetchData = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=33.5806464&lon=73.0300416&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchCoords();
    fetchData();
  }, [lat, lon]);

  return (
    <>
      <div className=" grid grid-cols-4 grid-rows-1 py-1 px-1" style={{}}>
        <div className="w-full h-full  col-start-1">
          <FavSites />
        </div>
        <div className="w-full h-screen text-center col-span-2 flex flex-col justify-between items-center p-4">
          <Clock />
          <Greeting />
          <DayGoal />
          <div>
            <Quote className="flex flex-col" />
          </div>
        </div>
        <div className=" h-4/5 text-white font-Poppins">
          {typeof data.main != "undefined" ? (
            <Weather weatherData={data} />
          ) : (
            <div className=" text-center">
              Weather failed to fetch - check your internet connection
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
