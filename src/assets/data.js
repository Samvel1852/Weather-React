/* eslint-disable quotes */
import sunny from "./sunny.svg";
import sunnyCloudy from "./sunnyCloudy.svg";
import lightRainSunny from "./lightRainSunny.svg";
import rainThundershowers from "./rainThundershowers.svg";

const weather = [
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
];

export default weather;
