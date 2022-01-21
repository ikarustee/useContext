import React from "react";
import { Map, Marker } from "pigeon-maps";

const Usermap = ({ longitude, latitude }) => {
  console.log(longitude, latitude);

  return (
      <Map height={400} defaultCenter={[latitude, longitude]} defaultZoom={11}>
        <Marker width={50} anchor={[latitude, longitude]} />
      </Map>
  );
};

export default Usermap;
