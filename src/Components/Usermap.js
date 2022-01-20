import React from "react";
import { Map, Marker } from "pigeon-maps";

const Usermap = ({ longitude, latitude }) => {
  console.log(longitude, latitude);

  return (
    <div className="usermap">
      <Map height={200} defaultCenter={[latitude, longitude]} defaultZoom={11}>
        <Marker width={50} anchor={[latitude, longitude]} />
      </Map>
    </div>
  );
};

export default Usermap;
