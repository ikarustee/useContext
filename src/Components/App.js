import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "./App.css";
import Navbar from "./Navbar";
import {DateTime} from "luxon"
import MyMap from "./Map";

function App() {
  const { user } = useContext(UserContext);
  const [userGeoIpData, setUserGeoIpData] = useState(null);
  const [mapLongLat, setMapLongLat] = useState(null)

  // Country, continent, 


  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`)
    .then((res) => res.json())
    .then((data) => setUserGeoIpData(data))
  }, [])

  useEffect(() => {
   if(userGeoIpData) {fetch(`https://api.ipfind.com?ip=${userGeoIpData.ip}&auth=${process.env.REACT_APP_IPFIND_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      setMapLongLat(data)
      console.log(data)
    })}
  }, [userGeoIpData])

  useEffect(() => {
    console.log(user);
  }, [user]);


  return (
    <div className="App component">
      <h1>PROP DRILLING & useContext & provider pattern</h1>
      <h2>hi {userGeoIpData && userGeoIpData.ip}</h2>
      { mapLongLat && <MyMap latitude={mapLongLat.latitude} longitude={mapLongLat.longitude} />
      }
      {DateTime.local()
        .setLocale("en")
        .plus({ days: -7 })
        .toRelative({ unit: "hours" })}
      {user?.picture?.thumbnail ? <Navbar /> : "loading"}
    </div>
  );
}

export default App;
