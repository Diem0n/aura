import { fetchCoordinates } from "../utils/fetchCordinates";
import { formatTime } from "../utils/formatTime";

const getWeather = async () => {
  const { latitude, longitude } = await fetchCoordinates();
  const key = import.meta.env.VITE_WEATHERKEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );
    if (response.ok) {
      const weatherData = await response.json();
      return parseWeatherData(weatherData);
    } else {
      throw new Error(`Error fetching weather data: ${response.status}`);
    }
  } catch (error) {
    console.error("Fetching weather error: ", error);
    throw error;
  }
};

const parseWeatherData = (data) => {
  const description = data.weather[0].description;
  const temp = Math.round(data.main.temp);
  const maxTemp = Math.round(data.main.temp_max);
  const city = data.name;
  const windSpeed = data.wind.speed;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const sunrise = formatTime(data.sys.sunrise);
  const sunset = formatTime(data.sys.sunset);
  return {
    temp,
    description,
    maxTemp,
    city,
    windSpeed,
    humidity,
    pressure,
    sunset,
    sunrise,
  };
};
export { getWeather, parseWeatherData };
