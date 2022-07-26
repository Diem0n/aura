import "./App.css";
import React, { useEffect, useState } from "react";
import Quote from "./components/Quote";
import FavSites from "./components/FavSites";
import Clock from "./components/Clock";
import DayGoal from "./components/DayGoal";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import day from "./day.jpg";
import night from "./night__.jpg";

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    if (new Date().getHours() <= 6 && new Date().getHours() <= 18) {
      document.body.style.backgroundImage = `url('${day}')`;
    } else {
      document.body.style.backgroundImage = `url('${night}')`;
    }
    const fetchCoords = async () => {
      await navigator.geolocation.getCurrentPosition(function (position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
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
          console.log(result);
        });
    };
    fetchCoords();
    fetchData();
  }, [lat, lon]);

  return (
    <>
      <div
        className=" grid grid-cols-4 grid-rows-3 py-16 px-1 gap-y-16"
        style={{}}
      >
        <div className="w-full h-full row-span-2 row-start-1 col-start-1">
          <FavSites />
        </div>
        <div className=" w-full  h-4/5 text-center col-span-2 flex flex-col justify-center items-center">
          <Clock />
          <Greeting />
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
        {/* //* bugfix #3 push quote below */}
        <div className=" w-full text-center col-span-2 flex flex-col justify-between align-middle items-center row-start-2 col-start-2">
          <DayGoal />
          <div className="">
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
