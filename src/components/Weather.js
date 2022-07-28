import React from "react";
import { Card } from "semantic-ui-react";

function Weather({ weatherData }) {
  let url = "https://openweathermap.org/img/wn/";
  return (
    <Card>
      <Card.Content>
        <span className="flex flex-col">
          {" "}
          <span className="flex items-center justify-end">
            <img
              src={url + weatherData.weather[0].icon + "@2x.png"}
              alt="new"
            />
            <p className="mr-2">{weatherData.main.temp} &deg;C</p>
            <p className="mr-2">{weatherData.weather[0].description}</p>
          </span>
          <span className="flex justify-end mr-2 -mt-7 text-sm">
            {weatherData.name}
          </span>
        </span>
      </Card.Content>
    </Card>
  );
}

export default Weather;
