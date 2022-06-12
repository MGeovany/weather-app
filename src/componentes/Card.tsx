import React from "react";
import CloudIcon from "../svg/CloudIcon";
import LocationIcon from "../svg/LocationIcon";
import NubosityIcon from "../svg/NubosityIcon";
import TempIcon from "../svg/TempIcon";
import { Icons } from "./Icons";

export const Card = ({ weather, forecast, showForecast }: any) => {
  const img =
    "https://images.pexels.com/photos/12365569/pexels-photo-12365569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bgimg = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="card">
      <div className="card-icon">
        <Icons />
      </div>
      <div className="card-temp">22 C</div>
      <div className="card-city">
        <LocationIcon width={20} height={20} />
        San Pedro Sula
      </div>
      <div className="card-img" style={bgimg}>
        <div className="card-desc">
          <div className="card-desc-icons">
            <div className="card-desc-icon">
              <NubosityIcon width={31} height={56} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              17%
              <div className="card-info">Humedad</div>
            </div>
          </div>
          <div className="card-desc-icons">
            <div className="card-desc-icon-3">
              <TempIcon width={40} height={32} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              -5 C<div className="card-info">Temp. Minima</div>
            </div>
          </div>
          <div className="card-desc-icons">
            <div className="card-desc-icon-3">
              <CloudIcon width={30} height={30} fill={"#ffffff"} />
            </div>
            <div className="card-info">
              75%
              <div className="card-info">Nubosidad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
