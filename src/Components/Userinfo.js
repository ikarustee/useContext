import React from "react";

function Userinfo({ IP, location, city, countryCode, timeZone }) {
  return (
    <>
      <li> IP: {IP} </li>
      <li> Current Location: {city}, {location}</li>
      <li> Country Code: {countryCode} </li>
      <li> Time Zone: {timeZone} </li>
      <li>
        National Flag: <img src={`http://api.ipfind.com/flags/64/${countryCode.toLowerCase()}.png`} alt="Country flag" />
      </li>
    </>
  );
}

export default Userinfo;
