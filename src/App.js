import React, { useEffect, useState } from "react";
import Photo from './Photo'
import Name from './Name'
import "./App.css";
import axios from "axios"

function App() {

  const [nasaInfo, setNasaInfo] = useState({})

//   useEffect(() => {
//     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//     .then(response => {
//       console.log(response)

//       setNasaInfo(response.data)
//     })
     
// }, [])





  return (
    <div className="App">
      <h1>
        WELCOME TO THE NASA WORLD
    </h1>

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
