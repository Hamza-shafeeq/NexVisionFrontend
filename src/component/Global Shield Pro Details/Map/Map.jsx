import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";

import Sidebar from "../../sidebar/sidebar";
import { MapStyle } from "./MapStyle";
// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={Icon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default function Map(props) {
  return (
    // <PhoneLookupDetailsStyledled>
    <MapStyle>
      <Sidebar>
        <div className="map">
          {/* <h2 className="map-h2">Come Visit Us At Our Campus</h2> */}

          <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={props.Location}
              defaultZoom={props.zoomLevel}
            >
              <LocationPin
                lat={props.Location.lat}
                lng={props.Location.lng}
                text={props.Location.address}
              />
            </GoogleMapReact>
          </div>
        </div>
      </Sidebar>
    </MapStyle>
  );
}
