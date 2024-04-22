import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import WeatherDates from "./WeatherDates";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li><WeatherDates date={props.data.dates} /> </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <WeatherIcon code={props.data.icon} size={52} /> {" "}
              <WeatherUnits celsius={props.data.temperature} />
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