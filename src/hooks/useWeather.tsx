import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "../types/Types";

const APIKEYW = process.env.REACT_APP_WEATHER_KEY;

export const useWeather = (location: string) => {
  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEYW}&q=${location}&units=metric`;
  const [dataw, setDataw] = useState<Weather>({
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],

    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      city: "",
      temp_max: 0,
    },
  });

  const getWeather = async () => {
    try {
      const response = await axios.get(urlWeather);
      setDataw(response.data);
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
