
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
  const data = await getWeather();
  // const data = {
  //   coord: { lon: 10.99, lat: 44.34 },
  //   weather: [
  //     { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
  //   ],
  //   base: "stations",
  //   main: {
  //     temp: 25.39,
  //     feels_like: 25.45,
  //     temp_min: 23.15,
  //     temp_max: 26.71,
  //     pressure: 1018,
  //     humidity: 56,
  //     sea_level: 1018,
  //     grnd_level: 936,
  //   },
  //   visibility: 10000,
  //   wind: { speed: 2.63, deg: 77, gust: 1.81 },
  //   clouds: { all: 0 },
  //   dt: 1691667084,
  //   sys: {
  //     type: 2,
  //     id: 2004688,
  //     country: "IT",
  //     sunrise: 1691640773,
  //     sunset: 1691692210,
  //   },
  //   timezone: 7200,
  //   id: 3163858,
  //   name: "Zocca",
  //   cod: 200,
  // };
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
