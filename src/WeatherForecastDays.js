import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDays(props) {
  return (
    <div>
      <div className="WeatherForecast-Day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecastTemperature">
        <span className="WeatherForecastTemperature-max">
          {props.data.temp.max}°
        </span>{" "}
        <span className="WeatherForecastTemperature-min">
          {props.data.temp.min}°
        </span>
      </div>
    </div>
  );
}
