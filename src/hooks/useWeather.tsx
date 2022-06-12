import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherData } from "../types/Types";

export const useWeather = (location: string) => {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0b1d8dc54b4fbddf609cade05ca3f715&q=${location}&units=metric`;
  const [dataw, setDataw] = useState<WeatherData>({
    degrees: 0,
    humidity: 0,
    temp_min: 0,
    cloudiness: 0,
    temp: 0,
    name: "",
    city: "",
    pressure: 0,
  });

  const getWeather = async () => {
    try {
      const response = await axios.get(urlWeather);
      setDataw(response.data.main);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();

    setTimeout(() => {
      getWeather();
    }, 60000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    dataw,
  };
};
