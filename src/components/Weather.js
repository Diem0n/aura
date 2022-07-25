import React from "react";
import { Card } from "semantic-ui-react";

function Weather({ weatherData }) {
  let url = "https://openweathermap.org/img/wn/";
  return (
    <Card>
      <Card.Content>
        <span className="flex items-center justify-end">
          <img src={url + weatherData.weather[0].icon + "@2x.png"} alt="new" />
          <p className="m-2">{weatherData.main.temp} &deg;C</p>
          <p className="m-2">{weatherData.weather[0].description}</p>
        </span>
        <span className="flex justify-end m-2">{weatherData.name}</span>
      </Card.Content>
    </Card>
  );
}

export default Weather;
