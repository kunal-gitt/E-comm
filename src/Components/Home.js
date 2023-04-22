import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="div">
        <h1>THE GENERICS</h1>
        <button className="btn">Get our Latest Album</button>
      </div>
      <div>
        <h1 className="tours">Tours</h1>
      </div>
      <div>
        <ul>
          <li className="li">
            <span className="show">July 16</span> <span>DETROIT,MI</span>
            <span>DTE ENERGY MUSIC</span>
            <button className="btn-1">Buy Tickets</button>
          </li>
          <hr className="hr" />
          <li className="li">
            <span className="show">July 19</span> <span>TORONTO,ON</span>
            <span>BUDWEISER STAGE</span>
            <button className="btn-1">Buy Tickets</button>
          </li>
          <hr className="hr" />
          <li className="li">
            <span className="show">JULY 22</span> <span>BRISTOW,VA</span>
            <span>JUGGY KUBE LIVE</span>
            <button className="btn-1">Buy Tickets</button>
          </li>
          <hr className="hr" />
          <li className="li">
            <span className="show">JULY 29</span> <span>PHOENIX,AZ</span>
            <span>AK-CHIN PAVILION</span>
            <button className="btn-1">Buy Tickets</button>
          </li>
          <hr className="hr" />
          <li className="li">
            <span className="show">AUG 2</span> <span>LAS VEGAS,NV</span>
            <span>T-MOBILE ARENA</span>
            <button className="btn-1">Buy Tickets</button>
          </li>
          <hr className="hr" />
          <li className="li">
            <span className="show">AUG 7</span> <span>CONCORD,CA</span>
            <span>CONCORD PAVILION</span>
            <button className="btn-1">Buy Tickets</button>
          </li>
          <hr className="hr" />
        </ul>
      </div>

      <h2 className="h2">THE GENERICS</h2>
    </div>
  );
};

export default Home;
