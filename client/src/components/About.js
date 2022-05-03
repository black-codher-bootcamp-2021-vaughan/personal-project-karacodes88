import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="header">
    
      <div className="breadcrumb">
        <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
        <Link to="/"> Map
        ({props.bookLength})
        </Link>
        <img className="banner" src={`https://australiascience.tv/app/uploads/2020/01/200113_bees_bumble-bees_lead.jpg`}/>
      
      </div>
      <div className="page">
        <h1>
          {" "}
          This App is about Asian Hornet Sighting if you have spotted  a {" "}
        </h1>
      </div>
    </div>
    
    
  );
};


export default About;
