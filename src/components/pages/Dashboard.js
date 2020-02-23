import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios({
      "method": "GET",
      "url": "https://community-open-weather-map.p.rapidapi.com/find",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "20f00be919mshec328dc8ae44925p136c56jsnae066c75dd0c"
      }, "params": {
        "type": "link%2C accurate",
        "units": "imperial%2C metric",
        "q": `${query}`
      }
    })
      .then((response) => {
        setData(response.data.list[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
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
            />
            <input type="submit" value="Submit" className="search-submit" />
          </form>
        </div>
        <div className="flex-center">
          {loading ? <Loader type="Puff" color="#E69646" height={50} width={50} /> : null}
        </div>
        {_.isEmpty(data) ? null :
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
                  <tr>
                    <td className="label">RAIN</td>
                    <td className="value">{data.rain} mm</td>
                  </tr>
                  <tr>
                    <td className="label">WINDS</td>
                    <td className="value">{data.wind.speed} m/s, {data.wind.deg} º</td>
                  </tr>
                  <tr>
                    <td className="label">CLOUDS</td>
                    <td className="value">{data.clouds.all}</td>
                  </tr>
                  <tr>
                    <td className="label">SEAL LEVEL</td>
                    <td className="value">{data.main.sea_level ? data.main.sea_level : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="label">GROUND LEVEL</td>
                    <td className="value">{data.main.grnd_level ? data.main.grnd_level : 'N/A'} m</td>
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
            <a href="/forecast" className="cta-btn forecast-btn">View forecast</a>
          </div>
        }
      </div>
    </div>
  );
}

export default Dashboard;
