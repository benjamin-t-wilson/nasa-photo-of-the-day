import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import APOD from "./components/APOD";

function App() {
  const [nasaPic, setNasaPic] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setNasaPic(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <>
      <APOD
        title={nasaPic.title}
        date={nasaPic.date}
        url={nasaPic.url}
        explanation={nasaPic.explanation}
        copyright={nasaPic.copyright}
      />
    </>
  );
}

export default App;
