import "../styles/Home.css";
import { Card } from "./Card";

export const Home = () => {
  return (
    <div className="home ">
          <div className="grid__cards">
            <Card city={"San Pedro Sula"} />
            <Card city={"Tokyo"} />
            <Card city={"Londres"} />
            <Card city={"Sydney"} />
            <Card city={"New York City"} />
            <Card city={"Paris"} />
          </div>
    </div>
  );
};
