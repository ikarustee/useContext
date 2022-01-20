import React from "react";
import { DateTime } from "luxon";


function Userinfo({ IP, location, city, countryCode, timeZone }) {

  let time = new Date()
	let hours = time.getHours() 
	let minutes = time.getMinutes()

  return (
    <>
          <li> IP: {IP} </li>
          <li> Current Location: {city}, {location}</li>
          <li> Country Code: {countryCode} </li>
          <li> Time Zone: {timeZone} </li>
          <li>Local time: {hours}:{minutes} | {DateTime.now().setLocale(countryCode.toLowerCase()).toFormat('MMMM dd, yyyy')}</li>
          <li className="flag">
            National Flag: <img className="flag" src={`http://api.ipfind.com/flags/64/${countryCode.toLowerCase()}.png`} alt="Country flag" width="100" />
          </li>
    </>
  );
}

export default Userinfo;