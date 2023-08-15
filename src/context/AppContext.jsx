import React, { useState, createContext, useEffect, useMemo } from "react";
import { getWeather, parseWeatherData } from "../services/getWeather";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [username, setUserName] = useState("Diem0n");
  const [weather, setWeather] = useState(null);
  const [errors, setErrors] = useState([]);
  const [toggleOverlay, setToggleOverlay] = useState(false);

  const getExpireTime = () => {
    const hours = new Date().getHours();
    const hoursRemaining = 24 - hours;
    return Date.now() + hoursRemaining * 60 * 60 * 1000;
  };

  const weatherDataHandler = async () => {
    const cache = localStorage.getItem("weather");
    if (cache) {
      const parsedCache = JSON.parse(cache);
      if (parsedCache.expire > Date.now()) {
        setWeather(parsedCache.data);
        return;
      }
    }
    const data = await getWeather();
    if (data) {
      setWeather(data);
      const cache = JSON.stringify({
        data: data,
        expire: getExpireTime(),
      });
      localStorage.removeItem("weather");
      localStorage.setItem("weather", cache);
    }
  };

  useEffect(() => {
    weatherDataHandler();
  }, []);

  return (
    <AppContext.Provider
      value={{
        username,
        setUserName,
        errors,
        setErrors,
        weather,
        setWeather,
        toggleOverlay,
        setToggleOverlay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
