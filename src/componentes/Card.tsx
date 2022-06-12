import React, { useEffect } from "react";
import CloudIcon from "../svg/CloudIcon";
import LocationIcon from "../svg/LocationIcon";
import NubosityIcon from "../svg/NubosityIcon";
import TempIcon from "../svg/TempIcon";
import { Icons } from "./Icons";
import { useWeather } from "../hooks/useWeather";
import { useImage } from "../hooks/useImage";
import { Cityimg } from "./Cityimg";

export const Card = (city: any) => {
  const { dataw } = useWeather(city.city);

  const { image } = useImage(city.city);

  console.log("image", image);
  const img =
    "https://images.pexels.com/photos/12365569/pexels-photo-12365569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let bgimg = {
    backgroundImage: "",
  };
  useEffect(() => {
    let src = image.largeImageURL && img;
    const bgimg = {
      backgroundImage: `url(${src})`,
    };


  }, [image]);

  return (
    <div className="card">
      <Cityimg bgimg={props}/>
      <div className="card-icon">
        <Icons />
      </div>
      <div className="card-temp">{Math.round(dataw.temp)} °C</div>
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
              {dataw.humidity}%<div className="card-info">Humedad</div>
            </div>
          </div>
          <div className="card-desc-icons">
            <div className="card-desc-icon-3">
              <TempIcon width={40} height={32} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              {Math.round(dataw.temp_min)} °C
              <div className="card-info">Temp. Minima</div>
            </div>
          </div>
          <div className="card-desc-icons">
            <div className="card-desc-icon-3">
              <CloudIcon width={30} height={30} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              {dataw.pressure} hPa
              <div className="card-info">Pression</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
