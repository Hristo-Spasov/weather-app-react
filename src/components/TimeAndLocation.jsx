import React from "react";
import dateBuilder from "./DateBuilder";

const TimeAndLocation = ({ weather }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-sm font-extralight">
          {dateBuilder(new Date())}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-md font-medium">
          {weather.name},{weather.sys.country}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
