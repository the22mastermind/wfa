import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Forecast = ({ cityName }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      axios({
        "method": "GET",
        "url": "https://community-open-weather-map.p.rapidapi.com/forecast",
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }, "params": {
          "q": cityName
        }
      })
        .then((response) => {
          setForecastData(response.data.list);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })
    };
    fetchData();
  }, [cityName]);

  return (
    <div className="forecast-wrapper">
      <div className="flex-center">
        {loading ? <Loader type="Puff" color="#E69646" height={50} width={50} /> : null}
      </div>
      <div className="result-title">5 Day Forecast (3 hour interval)</div>
      {
        forecastData.length < 1 ? null :
          forecastData.map((item, key) => (
            <div key={key} className="card">
              <div className="day">
                <div className="day-name">{moment(item.dt, 'X').format('dddd')} </div>
                <div className="day-time">{moment(item.dt, 'X').format('LT')} </div>
              </div>
              <div className="result-current">
                <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="w-icon" alt="weather icon" /></div>
                <div className="temperature">{_.floor((item.main.temp - 273.15))} ºC</div>
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default Forecast;
