import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDays from "./WeatherForecastDays";
import "./ForecastDays.css";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
           <WeatherForecastDays data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }
}
