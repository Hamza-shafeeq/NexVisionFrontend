import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker"; // Import a specific icon
import Sidebar from "../sidebar/sidebar";

import { MapStyle } from "./style";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

function RealtimeMapBox(props) {
  const navigate = useNavigate();
  // Even if the location is undefined, we set a default center
  const defaultCenter =
    props.Location && props.Location.lat && props.Location.lng
      ? props.Location
      : RealtimeMapBox.defaultProps.Location;

  return (
    <MapStyle>
      <Sidebar>
        <div className="Box-Section">
          <div className="button-container">
            <button className="Next-Button">Draw region</button>
            <button className="Next-Button">Reset</button>
          </div>
        </div>
        <div className="map">
          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }} // Replace with your API key
              defaultCenter={defaultCenter}
              defaultZoom={props.zoomLevel}
            >
              {props.Location && props.Location.lat && props.Location.lng && (
                <LocationPin
                  lat={props.Location.lat}
                  lng={props.Location.lng}
                  text={props.Location.address}
                />
              )}
            </GoogleMapReact>
          </div>
        </div>
        <div className="Text-Section">
          <span className="Region-text">Region:</span>
          <span className="Select-text"> No region selected</span>
        </div>
        <div className="Buttons-Section">
          <div className="General-Buttons-Section">
            <button className="CloseButton">Close</button>
          </div>
          <div className="General-Buttons-Section1">
            <button
              className="NextButton"
              onClick={() => navigate("/real-time-crisis")}
            >
              Save
            </button>
          </div>
        </div>
      </Sidebar>
    </MapStyle>
  );
}

RealtimeMapBox.defaultProps = {
  Location: {
    lat: 0,
    lng: 0,
    address: "",
  },
  zoomLevel: 10,
};

export default RealtimeMapBox;
