import React from "react";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>Sunday 13:31</li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png"
                alt="Clear Sky"
              />
              <span className="WeatherTemperature">
                <span className="temperature">
                  {" "}
                  {Math.round(props.data.tempperature)}{" "}
                </span>
                <span className="unit">°C</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}