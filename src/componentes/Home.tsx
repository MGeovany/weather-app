import React from "react";

import "../styles/Home.css";
import { Card } from "./Card";

export const Home = ({ getLocation }: any) => {
  return (
    <div className="home">
      <div className="grid__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
