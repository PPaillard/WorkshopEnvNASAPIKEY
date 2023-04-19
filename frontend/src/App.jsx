import React, { useEffect, useState } from "react";
import axios from "axios";
import Picture from "./components/Picture";
import "./App.css";

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

function App() {
  const [picture, setPicture] = useState({});
  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`).then(
      (response) => setPicture(response.data)
    );
  }, []);

  return (
    <div className="App">{picture.date && <Picture picture={picture} />} </div>
  );
}

export default App;
