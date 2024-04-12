import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://teslimat-porfolio.netlify.app"
            target="_blank"
            rel="noreferrer">
            Teslimat Adeyemi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Teslimat/react-weather-search-engine"
            target="_blank"
            rel="noreferrer">
            open-sourced
          </a>{" "}
          and{" "}
          <a
            href="https://chimerical-biscochitos-6b2998.netlify.app"
            target="_blank"
            rel="noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
