import React from "react";

export default function WeatherDates(props) {
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.date.getDay()];
  let ndate= props.date.getDate()
  let hours = props.date.getHours();
let minutes = props.date.getMinutes()
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  if (hours <10){
    hours = `0${hours}`
  }

   if (minutes < 10) {
     minutes = `0${minutes}`;
   }

  return (
    <div> {day}, {ndate} {month} {year} 
    <div> {hours}:{minutes}</div>
    </div>

  )
}
