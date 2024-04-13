import React, {useState} from "react";
import "./Weather.css"
import axios from "axios"


export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ready: false})
    let [city, setCity] = useState(props.defaultCity)

    function handleresponse(response){
        console.log(response.data)
        setWeatherData({
            ready: true,
            city: response.data.name,
            description: response.data.weather[0].description,
            tempperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
    }

    function search(){
    let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleresponse)
    }


    function handleSubmit(event){
        event.preventDefault();
        search(city);
    }

    function changeCity(event){
        setCity(event.target.value)
    }

    if(weatherData.ready){
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              className="form-control"
              onChange={changeCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>Sunday 13:31</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png"
              alt="Clear Sky"
            />
            <span className="WeatherTemperature">
              <span className="temperature"> {Math.round(weatherData.tempperature)} </span>
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
    } else {
        search();
        return "Loading...";
    }
}
