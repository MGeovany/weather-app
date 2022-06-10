import React from "react";

export const WeatherApi = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=0b1d8dc54b4fbddf609cade05ca3f715";

  let cityUrl = "&a=";

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=0b1d8dc54b4fbddf609cade05ca3f715";

  const [weather, setWeather] = React.useState([]);
  const [forecast, setForecast] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showForecast, setShowForecast] = React.useState(false);
  const [location, setLocation] = React.useState("");

  const getLocation = async (loc: any) => {
    setLoading(true);
    setLocation(loc);

    url = url + cityUrl + loc;

    await fetch(url)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setWeather(data);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        setShowForecast(false);
      });
  };

  return <div>WeatherApi</div>;
};
