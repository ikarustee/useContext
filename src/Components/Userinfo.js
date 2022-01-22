import React from "react";
import { DateTime } from "luxon";


function Userinfo({ IP, location, city, countryCode, timeZone }) {

  const addZero = (i) => {
    if (i < 10) {i = "0" + i}
    return i
  }
  let time = new Date()
	let hours = time.getHours() 
	let minutes = addZero(time.getMinutes())


  return (
    <>    
          <h1>Geolocation</h1>
          <p><strong>IP-Adress</strong></p>
          <h2>{IP}</h2>
          <p><strong>Location</strong></p>
          <h3><img className="flag" src={`http://api.ipfind.com/flags/64/${countryCode.toLowerCase()}.png`} alt="Country flag" width="100" /> {city}, {location}</h3>
          <p><strong>Timezone</strong></p>
          <h3>{timeZone}</h3>
          <p><strong>Date and time</strong></p>
          <h3>{DateTime.now().setLocale(countryCode.toLowerCase()).toFormat('MMMM dd, yyyy')} | {hours}:{minutes}</h3>
   </>
  );
}

export default Userinfo;