import React from "react";
import "./Home.css";

const DUMMY_List = [
  {
    id: 1,
    date: "july 16",
    country: "DETROIT,MI",
    location: "DTE ENERGY MUSIC",
  },
  {
    id: 2,
    date: "july 19",
    country: "TORONTO,ON",
    location: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "july 22",
    country: "BRISTOW,VA",
    location: "JUGGY KUBE LIVE",
  },
  {
    id: 4,
    date: "JULY 29",
    country: "PHOENIX,AZ",
    location: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    country: "LAS VEGAS,NV",
    location: "T-MOBILE ARENA",
  },

  {
    id: 6,
    date: "AUG 7",
    country: "CONCORD,CA",
    location: "CONCORD PAVILION",
  },
];

const Home = () => {
  const Locationlist = DUMMY_List.map((location) => {
    return (
      <div>
        <li className="li">
          <span className="show">{location.date}</span>{" "}
          <span>{location.country}</span>
          <span>{location.location}</span>
          <button className="btn-1">Buy Tickets</button>
        </li>
        <hr className="hr" />
      </div>
    );
  });

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
        <ul>{Locationlist}</ul>
      </div>

      <h2 className="h2">THE GENERICS</h2>
    </div>
  );
};

export default Home;
