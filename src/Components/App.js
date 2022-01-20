import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "./App.css";
import Usermap from "./Usermap";
import Userinfo from "./Userinfo";

function App() {
  const { user } = useContext(UserContext);
  const [userGeoIpData, setUserGeoIpData] = useState(null);
  const [userMapData, setUserMapData] = useState();
  const [userFlag, setUserFlag] = useState();

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setUserGeoIpData(data));
  }, []);


  useEffect(() => {
    if (userGeoIpData) {
      fetch(
        `https://api.ipfind.com?ip=${userGeoIpData.ip}&auth=${process.env.REACT_APP_IPFIND_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserMapData(data);
        });
      /* Second fetch to get flag */
      // https://api.ipfind.com/flag?ip=${userGeoIpData.ip}&auth=${process.env.REACT_APP_IPFIND_API_KEY}

  
    }
  }, [userGeoIpData]);

  console.log(userFlag)

  return (
    <div className="App component">
      <h1>GEOLOCATION</h1>
      {/*    <h2>{userGeoIpData && userGeoIpData.ip}</h2> */}
      {userMapData && (
        <div>
          <Userinfo
            IP={userGeoIpData.ip}
            location={userMapData.country}
            city={userMapData.city}
            countryCode={userMapData.country_code}
            timeZone={userMapData.timezone}
          />

          <Usermap
            latitude={userMapData.latitude}
            longitude={userMapData.longitude}
          />
        </div>
      )}
    </div>
  );
}

export default App;
