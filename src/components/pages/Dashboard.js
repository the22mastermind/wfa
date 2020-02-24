import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Forecast from './Forecast';

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [showForecast, setShowForecast] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setShowForecast(false);
    setLoading(true);
    await axios({
      "method": "GET",
      "url": "https://community-open-weather-map.p.rapidapi.com/weather",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "callback": "test",
        "id": "2172797",
        "units": "%22metric%22 or %22imperial%22",
        "mode": "xml%2C html",
        "q": query
      }
    })
      .then((response) => {
        const parsedData = JSON.parse(response.data.slice(5, -1));
        setData(parsedData);
        setCityName(parsedData.name);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleViewForecast = () => {
    setShowForecast(true);
  }

  return (
    <div className="container dashboard">
      <div className="dashboard-content">
        <div className="search-wrapper">
          <form className="search-form" onSubmit={handleForm}>
            <input
              type="text"
              placeholder="Enter your city here"
              className="search-box"
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <input type="submit" value="Submit" className="search-submit" />
          </form>
        </div>
        <div className="flex-center">
          {loading ? <Loader type="Puff" color="#E69646" height={50} width={50} /> : null}
        </div>
        {_.isEmpty(data) ? null : showForecast ? <Forecast cityName={cityName} /> :
          <div className="result-wrapper">
            <div className="result-title">Weather in {data.name}, {data.sys.country} </div>
            <div className="result-date mb20">{moment(data.dt, 'X').format('LLL')} </div>
            <div className="result-current">
              <div><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className="w-icon" alt="weather icon" /></div>
              <div>{_.floor((data.main.temp - 273.15))} ºC</div>
            </div>
            <div className="result-current-desc mb20">{data.weather[0].description} </div>
            <div className="result-details">
              <table className="results-table">
                <tbody>
                  <tr>
                    <td className="label">HIGH</td>
                    <td className="value">{_.floor((data.main.temp_max - 273.15))} ºC</td>
                  </tr>
                  <tr>
                    <td className="label">LOW</td>
                    <td className="value">{_.floor((data.main.temp_min - 273.15))} ºC</td>
                  </tr>
                  <tr>
                    <td className="label">REAL FEEL</td>
                    <td className="value">{_.floor((data.main.feels_like - 273.15))} ºC</td>
                  </tr>
                  <tr>
                    <td className="label">HUMIDITY</td>
                    <td className="value">{data.main.humidity} %</td>
                  </tr>
                  {data.visibility ?
                    <tr>
                      <td className="label">VISIBILITY</td>
                      <td className="value">{data.visibility} m</td>
                    </tr>
                    : null
                  }
                  {data.rain ?
                    <tr>
                      <td className="label">RAIN</td>
                      <td className="value">{data.rain} mm</td>
                    </tr>
                    : null
                  }
                  <tr>
                    <td className="label">WINDS</td>
                    <td className="value">{data.wind.speed} m/s, {data.wind.deg}º</td>
                  </tr>
                  <tr>
                    <td className="label">CLOUDS</td>
                    <td className="value">{data.clouds.all}</td>
                  </tr>
                  <tr>
                    <td className="label">SUNRISE</td>
                    <td className="value">{data.sys.sunrise ? moment(data.sys.sunrise, 'X').format('LT') : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="label">SUNSET</td>
                    <td className="value">{data.sys.sunset ? moment(data.sys.sunset, 'X').format('LT') : 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button onClick={handleViewForecast} className="cta-btn forecast-btn">View forecast</button>
          </div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
