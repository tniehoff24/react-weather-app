import React from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="around">
        <div className="container">
          <div className="row">
            <div md="auto" className="weatherstats">
              <h1>My weather in:</h1>
              <h2 id="current-city">Baltimore</h2>
            </div>
            <div md="auto" className="weatherstats">
              <h2 id="today-temp">22°</h2>
              <h3>
                {/*<img src="" alt="Clear" className="iconSet" id="icon-main" />*/}
                ⛅ C / F
              </h3>
            </div>
            <div md="auto" className="weatherstats2">
              <h4 id="date">30 August</h4>
              <h4 id="humidity">Humidity: 80%</h4>
              <h4 id="wind">Wind: 3km/hr</h4>
              <h4 id="condition">Clear</h4>
            </div>
          </div>

          <div className="row" id="forecast">
            <div className="card">
              <h5>
                <strong>23°</strong>
                /18°
              </h5>
              🌨️
              <p>Tuesday</p>
            </div>
            <div className="card">
              <h5>
                <strong>23°</strong>
                /18°
              </h5>
              🌨️
              <p>Tuesday</p>
            </div>
            <div className="card">
              <h5>
                <strong>23°</strong>
                /18°
              </h5>
              🌨️
              <p>Tuesday</p>
            </div>
            <div className="card">
              <h5>
                <strong>23°</strong>
                /18°
              </h5>
              🌨️
              <p>Tuesday</p>
            </div>
            <div className="card">
              <h5>
                <strong>23°</strong>
                /18°
              </h5>
              🌨️
              <p>Tuesday</p>
            </div>
          </div>
        </div>

        <form id="form-input-city">
          <input
            type="text"
            id="text-input-city"
            placeholder="It's always sunny in..."
          />
          <button type="submit" className="searchButton">
            Search
          </button>
          <button type="submit" className="refreshButton" id="refresh-button">
            Refresh
          </button>
        </form>
        <div className="row">
          <small>
            This application is an open-sourced project by{" "}
            <a href="https://github.com/tniehoff24/SheCodes-Weather-App">
              Tess Niehoff
            </a>
            .
          </small>
        </div>
      </div>
    </div>
  );
}
