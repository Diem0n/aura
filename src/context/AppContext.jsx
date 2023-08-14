import React, { useState, createContext, useEffect } from "react";
import { getWeather, parseWeatherData } from "../services/getWeather";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [username, setUserName] = useState("Diem0n");
  const [weather, setWeather] = useState({
    temp: "N/A",
    description: "N/A",
  });
  const [errors, setErrors] = useState([]);
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const weatherDataHandler = async () => {
    const data = await parseWeatherData();
    if (data) {
      setWeather(data);
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
