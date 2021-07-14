/* eslint-disable quotes */
// import React, { useState } from "react";

import "./App.css";
import Card from "./components/card/Card.jsx";
import data from "./assets/data";

function App() {
  return (
    <div>
      <h1>Forecast</h1>
      <div className="App">
        {data.map((day) => {
          return (
            <Card
              weekDay={day.weekDey}
              imgURL={day.imgURL}
              temp={day.temp}
              key={day.weekDey}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
