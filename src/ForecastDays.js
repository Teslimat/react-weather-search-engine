import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDays.css";

export default function ForecastDays() {
  return (
    <div className="ForecastDays">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>{" "}
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
