import React from "react";
import CloudIcon from "../svg/CloudIcon";
import LocationIcon from "../svg/LocationIcon";
import NubosityIcon from "../svg/NubosityIcon";
import TempIcon from "../svg/TempIcon";
import { Icons } from "./Icons";
import { useWeather } from "../hooks/useWeather";
import useImage from "../hooks/useImage";

export const Card = (city: any) => {
  const { image } = useImage(city.city); // api images from pexel */
  const { dataw } = useWeather(city.city);

  const bgimg = {
    backgroundImage: `url(${image.src.original})`,
  };

  return (
    <div className="card">
      <div className="card-icon">
        <Icons props={dataw.weather[0].description} />
      </div>
      <div className="card-temp">{Math.round(dataw.main.temp)} °C</div>
      <div className="card-city">
        <LocationIcon width={20} height={20} />
        {city.city}
      </div>
      <div className="card-img" style={bgimg}>
        <div className="card-desc">
          <div className="card-desc-icons">
            <div className="card-desc-icon">
              <NubosityIcon width={31} height={56} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              {dataw.main.humidity}%<div className="card-info">Humedad</div>
            </div>
          </div>
          <div className="card-desc-icons">
            <div className="card-desc-icon-3">
              <TempIcon width={40} height={32} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              {Math.round(dataw.main.temp_min)} °C
              <div className="card-info">Temp. Minima</div>
            </div>
          </div>
          <div className="card-desc-icons">
            <div className="card-desc-icon-3">
              <CloudIcon width={30} height={30} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              {Math.round(dataw.main.temp_max)} °C
              <div className="card-info">Temp. Max</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
