import { fetchCoordinates } from "../utils/fetchCordinates"

const getWeather = async () => {
    const {latitude , longitude} = await fetchCoordinates();
    const key = import.meta.env.VITE_WEATHERKEY ;
    try{
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
        .then(data =>{
            console.log(data.json())
        })
    }
    catch(error){
        console.error('fetching weather error ' , error);
        throw error;
    }
}

const parseWeatherData = (data) =>{
    console.log(data)
}
export {getWeather , parseWeatherData}