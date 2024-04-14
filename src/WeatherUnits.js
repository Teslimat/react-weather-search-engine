import React, {useState} from "react";
import "./Weather.css"

export default function WeatherUnits(props){
    const [unit, setUnit] = useState("celsius")

    function showFarenheith(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }

   

    if (unit === "celsius"){
        
        return (
            <span className="WeatherTemperature">
              <span className="temperature">{Math.round(props.celsius)}</span>
              <span className="unit">
                °C |{" "}
                <a href="/" onClick={showFarenheith}>
                  °F
                </a>{" "}
              </span>
            </span>
         
        );
    } else{

          let fahrenheit = (props.celsius * 9) / 5 + 32;
          
        return (
          <span className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit">
              {" "}
              <a href="/" onChange={showCelsius}>
                °C
              </a>{" "}
              |°F
            </span>
          </span>
        );
    }
}