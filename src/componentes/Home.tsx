import "../styles/Home.css";
import { Card } from "./Card";

export const Home = () => {
  return (
    <div className="home">
      <div className="grid__cards">
        
        <Card city={"Madrid"} />
      </div>
    </div>
  );
};
