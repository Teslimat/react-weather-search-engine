import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
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
            icon:response.data.weather[0].icon,
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
      <WeatherInfo data={weatherData}/>
    </div>
  );
    } else {
        search();
        return "Loading...";
    }
}
