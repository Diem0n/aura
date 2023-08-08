import { fetchCoordinates } from "../utils/fetchCordinates";

const getWeather = async () => {
  const { latitude, longitude } = await fetchCoordinates();
  const key = import.meta.env.VITE_WEATHERKEY;
  try {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
    ).then((data) => {
      console.log(data.json());
    });
  } catch (error) {
    console.error("fetching weather error ", error);
    throw error;
  }
};

const parseWeatherData = (data) => {
  const data = {
    coord: { lon: 10.99, lat: 44.34 },
    weather: [
      { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" },
    ],
    base: "stations",
    main: {
      temp: 297.69,
      feels_like: 297.53,
      temp_min: 291.97,
      temp_max: 298.85,
      pressure: 1006,
      humidity: 51,
      sea_level: 1006,
      grnd_level: 924,
    },
    visibility: 10000,
    wind: { speed: 0.54, deg: 125, gust: 2.29 },
    clouds: { all: 29 },
    dt: 1691336217,
    sys: {
      type: 2,
      id: 2044440,
      country: "IT",
      sunrise: 1691294897,
      sunset: 1691346940,
    },
    timezone: 7200,
    id: 3163858,
    name: "Zocca",
    cod: 200,
  };
};
export { getWeather, parseWeatherData };
