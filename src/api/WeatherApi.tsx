import React, { useState } from "react";
import { Card } from "../componentes/Card";
import { Home } from "../componentes/Home";

const WeatherApi = () => {
  /*
  let urlWeather =
    "http://api.openweathermap.org/data/2.5/weather?appid=0b1d8dc54b4fbddf609cade05ca3f715";
  const cityUrl = "&q=";
  const urlForecast =
    "http://api.openweathermap.org/data/2.5/forecast?appid=0b1d8dc54b4fbddf609cade05ca3f715";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [showForecast, setShowForecast] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc: any) => {
    setLocation(loc);

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        console.log("weather", data);
      })
      .catch((error) => {
        console.log(error);
        setShowForecast(false);
      });
  };

  return (
    <React.Fragment>
      <Home getLocation={getLocation} />
      <Card weather={weather} forecast={forecast} showForecast={showForecast} />
    </React.Fragment>
  );
  */
};

export default WeatherApi;
