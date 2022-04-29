import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import ProfileMarker from "./ProfileMarker";

  const MAPBOX_TOKEN = "pk.eyJ1Ijoia2FyYTAxMjEiLCJhIjoiY2wyZ2JhcG1mMDFpYTNjbno3MG5kb3EwNSJ9.8Te14VkSLluQsTSolmd_DA"

  function Map(props) {
    const {profiles}=props
    
    console.log(profiles)
    return (
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
  );
}
  

    export default Map;

