import "./App.css";
import React, { useEffect, useState } from "react";
import Quote from "./components/Quote";
import FavSites from "./components/FavSites";
import Clock from "./components/Clock";
import DayGoal from "./components/DayGoal";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    const fetchCoords = async () => {
      await navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
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
      <div className=" grid grid-cols-4 grid-rows-3 p-20 gap-y-16">
        <div className="bg-yellow-600 w-full h-4/5 row-span-2 row-start-1 col-start-1">
          FAVS
        </div>
        <div className=" w-full h-4/5 text-center col-span-2 flex flex-col justify-center items-center">
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
        <div className=" w-full h-full mt-4 text-center col-span-2 flex flex-col justify-between align-middle items-center row-start-2 col-start-2">
          <DayGoal />
          <div className="mt-10">
            <Quote />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
