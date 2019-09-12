import React, { useEffect, useState } from "react";
import Photo from './Photo'
import Name from './Name'
import "./App.css";
import axios from "axios"

function App() {

  const [nasaInfo, setNasaInfo] = useState({})

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response)

        setNasaInfo(response.data)
      })

  }, [])





  return (
    <div className="App">
      <h1>
        PHOTO OF THE DAY
    </h1>

      <Name title={nasaInfo.title} explanation={nasaInfo.explanation} />
      <Photo imgUrl={nasaInfo.url} />
    </div>
  );
}

export default App;
