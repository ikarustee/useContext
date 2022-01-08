import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="App component">
      <h1>PROP DRILLING & useContext & provider pattern</h1>
      {user?.picture?.thumbnail ? <Navbar /> : "loading"}
    </div>
  );
}

export default App;
