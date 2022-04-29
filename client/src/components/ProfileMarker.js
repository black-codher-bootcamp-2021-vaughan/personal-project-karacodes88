import * as React from "react";
import Map, { Popup, Marker } from "react-map-gl";

function ProfileMarker(props) {
  const { longitude, latitude, color, profile } = props;
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <Marker
        
        longitude={longitude}
        latitude={latitude}
        color={color}
      >
        
          <img
            src="/images/bee-icon-image.jpeg"
            width="50px"
            alt="bees icon"
            onClick={(e) => {
                e.preventDefault();
    
                setShowPopup(!showPopup);
              }}
          />
      </Marker>
      {showPopup && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          <div>
            <h2>
              {" "}
              <img src={profile.Picture} width={"100px"} />
            </h2>
            <p>{profile.Description}</p>
          </div>
        </Popup>
      )}
    </>
  );
}
export default ProfileMarker;
