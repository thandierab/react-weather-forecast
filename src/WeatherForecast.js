import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    const load = () => {
      let city = props.city;
      const apiKey = "fdb54d87boat51d444fdd3abf00cc2b3";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    };

    setLoaded(false);
    load();
  }, [props.city]);

  function handleResponse(response) {
    if (response.data && response.data.daily) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  }

  if (loaded && forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
