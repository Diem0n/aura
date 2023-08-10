import { fetchCoordinates } from "../utils/fetchCordinates";

const getWeather = async () => {
  const { latitude, longitude } = await fetchCoordinates();
  const key = import.meta.env.VITE_WEATHERKEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );

    if (response.ok) {
      const weatherData = await response.json();
      return weatherData;
    } else {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
  } catch (error) {
    console.error("Fetching weather error: ", error);
    throw error;
  }
};

const parseWeatherData = async () => {
  const data = await getWeather()
 
  const description = data.weather[0].description;
  const temp = Math.round(data.main.temp);
  console.log(description, temp)
  return {
    temp,
    description,
  };
};
export { getWeather, parseWeatherData };
