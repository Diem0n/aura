import  { useState, createContext , useEffect } from "react";
import {  parseWeatherData } from "../services/getWeather";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [username, setUserName] = useState("Diem0n");
  const [weather, setWeather] = useState({
    temp: "N/A",
    description: "N/A",
  });
  const [errors, setErrors] = useState([]);

  const weatherDataHandler = async ()=>{
    const data = await parseWeatherData();
    if(data){
      setWeather(data)
    }
  }

  useEffect(()=>{
    weatherDataHandler()
  },[])

  return (
    <AppContext.Provider
      value={{ username, setUserName, errors, setErrors, weather, setWeather }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };