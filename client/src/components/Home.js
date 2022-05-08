import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="header">
      <div className="breadcrumb">
        <img
          className="banner"
          src={`https://australiascience.tv/app/uploads/2020/01/200113_bees_bumble-bees_lead.jpg`}
        />
      </div>
      <div>
        <h2> welcome to asian hornets sighting </h2>
      </div>
    </div>
  );
};

export default Home;
