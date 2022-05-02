import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="header">
      <h1>About</h1>
      <div className="breadcrumb">
        <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
        <Link to="/"> Map"
          map ({props.bookLength})
        </Link>
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