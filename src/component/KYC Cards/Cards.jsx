import React from "react";
import Details_Card from "./Details_Card";
import { CardStyle } from "./card-style";

export default function Cards() {
  return (
    <CardStyle>
      <div className="card-alignment">
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />
        <Details_Card />

      </div>
    </CardStyle>
  );
}
