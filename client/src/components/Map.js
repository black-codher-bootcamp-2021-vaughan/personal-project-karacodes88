import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import ProfileMarker from "./ProfileMarker";
import { Link } from "react-router-dom";

  const MAPBOX_TOKEN = "pk.eyJ1Ijoia2FyYTAxMjEiLCJhIjoiY2wyZ2JhcG1mMDFpYTNjbno3MG5kb3EwNSJ9.8Te14VkSLluQsTSolmd_DA"

  function Map(props) {
    const {profiles}=props
    
    console.log(profiles)
    return (
      <div className="map-image"> 
       <img className="city" src={`https://i.pinimg.com/originals/2c/f3/b7/2cf3b7cb7be8aa9614f14c0dfdca04c5.jpg`}/>
     
      <ReactMapGl
        initialViewState={{
          latitude: 52.5151746,
          longitude:-1.898075,
          zoom: 14
        }}
        style={{width: 800, height: 600}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {profiles && profiles.map(profile => <ProfileMarker profile={profile}longitude={profile.Location.Longitude}latitude={profile.Location.Latitude} color="red" />)}
       

    </ReactMapGl>
    </div>
  );
}
  

    export default Map;

