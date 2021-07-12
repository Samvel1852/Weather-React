import logo from "./logo.svg";
import sunny from "./weatherLogos/sunny.svg";
import sunnyCloudy from "./weatherLogos/sunnyCloudy.svg";
import rainThundershowers from "./weatherLogos/rainThundershowers.svg";
import lightRainSunny from "./weatherLogos/lightRainSunny.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [weather, weatherInfo] = useState([
    {
      weekDey: "Monday",
      imgURL: sunny,
      temp: "36C",
    },
    {
      weekDey: "Tuesday",
      imgURL: sunnyCloudy,
      temp: "32C",
    },
    {
      weekDey: "Wednesday",
      imgURL: rainThundershowers,
      temp: "35C",
    },
    {
      weekDey: "Thursday",
      imgURL: lightRainSunny,
      temp: "45C",
    },
    {
      weekDey: "Friday",
      imgURL: sunny,
      temp: "36C",
    },
    {
      weekDey: "Saturday",
      imgURL: sunnyCloudy,
      temp: "37C",
    },
    {
      weekDey: "Sunday",
      imgURL: rainThundershowers,
      temp: "39C",
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="day">
          <h3>{weather[0].weekDey}</h3>
          <img src={weather[0].imgURL} />
          <p>{weather[0].temp}</p>
        </div> */}
        {weather.map((day, index) => {
          return (
            <div key={index} className="day">
              <h3>{day.weekDey}</h3>
              <img src={day.imgURL} />
              <p>{day.temp}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
