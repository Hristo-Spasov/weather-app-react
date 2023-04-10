import React from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import {
  WiThermometerExterior,
  WiSunset,
  WiStrongWind,
  WiRaindrop,
  WiSunrise,
} from "react-icons/wi";
import moment from "moment/moment";

const Details = ({ weather }) => {
  return (
    <div>
      {/* The current weather */}
      <div className="flex items-center justify-center py-6 text-sm text-cyan-300">
        <p>{weather.weather[0].main}</p>
      </div>
      <div className=" flex flex-row items-center justify-evenly text-white py-3">
        {/* Weather icon */}
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
          className="w-20"
        />
        {/* Current temp */}
        <p className="text-4xl px-4"> {Math.round(weather.main.temp)}</p>
        {/* Icon bar with humidity,temp_feel,wind speed */}
        <div className="flex flex-col ">
          <div className="flex font-light text-sm items-center justify-center">
            <WiThermometerExterior size={18} className="mr1" />
            Feels like:
            <span className="font-medium ml-1">
              {Math.round(weather.main.feels_like)}°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiRaindrop size={18} className="mr1" />
            Humidity:
            <span className="font-medium ml-1">{weather.main.humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiStrongWind size={18} className="mr1" />
            Wind :
            <span className="font-medium ml-1">{weather.wind.speed} km/h</span>
          </div>
        </div>
      </div>
      {/* Sunrise and sunset and max temp and min temp */}
      <div className="flex flex-row items-center justify-center text-white space-x-2 text-sm py-3">
        <WiSunrise size={40} />
        <p className=" font-light">
          Rise:{" "}
          <span className="font-md ml-1 ">
            {moment
              .utc(weather.sys.sunrise, "X")
              .add(weather.timezone, "seconds")
              .format("HH:mm a")}
          </span>
        </p>
        <p className="font-light"></p>
        <WiSunset size={40} />
        <p className=" font-light">
          Set:{" "}
          <span className="font-md ml-1 ">
            {moment
              .utc(weather.sys.sunset, "X")
              .add(weather.timezone, "seconds")
              .format("HH:mm a")}
          </span>
        </p>
        <p className="font-light"></p>
        <BsArrowUpShort size={40} />
        <p className=" font-light">
          High:{" "}
          <span className="font-md ml-1 ">
            {Math.round(weather.main.temp_max)}°
          </span>
        </p>
        <p className="font-light"></p>
        <BsArrowDownShort size={40} />
        <p className=" font-light">
          Low:{" "}
          <span className="font-md ml-1 ">
            {Math.round(weather.main.temp_min)}°
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;
