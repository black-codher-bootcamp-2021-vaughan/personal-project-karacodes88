import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 52.5151746,
//     longitude: -1.898075,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10
//   });

  const MAPBOX_TOKEN = "pk.eyJ1Ijoia2FyYTAxMjEiLCJhIjoiY2wyZ2JhcG1mMDFpYTNjbno3MG5kb3EwNSJ9.8Te14VkSLluQsTSolmd_DA"

  function Map() {
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
        <Marker longitude={-1.898075} latitude={52.5151746} color="red" />
      </ReactMapGl>
    )};
  
    
  export default Map;