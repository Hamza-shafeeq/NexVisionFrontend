import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker"; // Import a specific icon
import Sidebar from "../../sidebar/sidebar";

import { SocialMapStyle } from "./style";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

function SocialMap(props) {
  const defaultCenter =
    props.Location && props.Location.lat && props.Location.lng
      ? props.Location
      : SocialMap.defaultProps.Location;

  return (
    <SocialMapStyle>
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
      </Sidebar>
    </SocialMapStyle>
  );
}

SocialMap.defaultProps = {
  Location: {
    lat: 0,
    lng: 0,
    address: "",
  },
  zoomLevel: 10,
};

export default SocialMap;
