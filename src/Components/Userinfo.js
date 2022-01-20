import React from "react";

function Userinfo({ IP, location, countryCode, timeZone, flag }) {
  return (
    <>
      <li> IP: {IP} </li>
      <li> Current Location: {location} </li>
      <li> Country Code: {countryCode} </li>
      <li> Time Zone: {timeZone} </li>
      <li>
        National Flag: <img src={flag} alt="Country flag" />
      </li>
    </>
  );
}

export default Userinfo;
