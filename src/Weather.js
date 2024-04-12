import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          <h1>Paris</h1>
          <ul>
            <li>Sunday 13:31</li>
            <li>Clear Sky</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png"
                  alt="Clear Sky"
                />
                <span className="WeatherTemperature">
                  <span className="temperature"> 15 </span>
                  <span className="unit">°C</span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: 44%</li>
                <li>Wind: 6.17Km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
