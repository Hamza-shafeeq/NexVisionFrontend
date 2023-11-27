import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import { BsFilterSquareFill } from "react-icons/bs";
import Sidebar from "../../sidebar/sidebar";
import { MapStyle } from "./MapStyle";
import { IoSearchSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={Icon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default function Map(props) {
  return (
    <MapStyle>
      <Sidebar>
        <div className="Box-Section">
          <div className="FormBox">
            <BsFilterSquareFill className="FormIcon" />
            <span className="Detail-title1">Filter</span>

            <IoSearchSharp className="FormIcon" />
            <input className="NameBox" type="Email" placeholder="Email" />
            <div className="Title-box">
              <span className="Detail-title">Details</span>
              <span className="Plus-Logo-Side">
                <HiPlus className="FormIcon" />
              </span>
            </div>
          </div>
          <div class="button-container">
            <button className="Next-Button">Map</button>

            <button className="Next-Button">Satellite</button>
          </div>
        </div>
        <div className="map">
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
