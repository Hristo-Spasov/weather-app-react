import React from "react";
import moment from "moment/moment";

const Forecast = ({ forecast }) => {
  const hourForecast = [
    {
      id: 0,
      icon: forecast.forecast.forecastday[0].hour[0].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[0].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[0].time)
        .format("HH:mm A"),
    },
    {
      id: 1,
      icon: forecast.forecast.forecastday[0].hour[1].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[1].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[1].time)
        .format("HH:mm A"),
    },
    {
      id: 2,
      icon: forecast.forecast.forecastday[0].hour[2].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[2].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[2].time)
        .format("HH:mm A"),
    },
    {
      id: 3,
      icon: forecast.forecast.forecastday[0].hour[3].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[3].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[3].time)
        .format("HH:mm A"),
    },
    {
      id: 4,
      icon: forecast.forecast.forecastday[0].hour[4].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[4].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[4].time)
        .format("HH:mm A"),
    },
    {
      id: 5,
      icon: forecast.forecast.forecastday[0].hour[5].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[5].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[5].time)
        .format("HH:mm A"),
    },
    {
      id: 6,
      icon: forecast.forecast.forecastday[0].hour[6].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[6].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[6].time)
        .format("HH:mm A"),
    },
    {
      id: 7,
      icon: forecast.forecast.forecastday[0].hour[7].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[7].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[7].time)
        .format("HH:mm A"),
    },
    {
      id: 8,
      icon: forecast.forecast.forecastday[0].hour[8].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[8].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[8].time)
        .format("HH:mm A"),
    },
    {
      id: 9,
      icon: forecast.forecast.forecastday[0].hour[9].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[9].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[9].time)
        .format("HH:mm A"),
    },
    {
      id: 10,
      icon: forecast.forecast.forecastday[0].hour[10].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[10].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[10].time)
        .format("HH:mm A"),
    },
    {
      id: 11,
      icon: forecast.forecast.forecastday[0].hour[11].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[11].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[11].time)
        .format("HH:mm A"),
    },
    {
      id: 12,
      icon: forecast.forecast.forecastday[0].hour[12].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[12].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[12].time)
        .format("HH:mm A"),
    },
    {
      id: 13,
      icon: forecast.forecast.forecastday[0].hour[13].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[13].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[13].time)
        .format("HH:mm A"),
    },
    {
      id: 14,
      icon: forecast.forecast.forecastday[0].hour[14].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[14].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[14].time)
        .format("HH:mm A"),
    },
    {
      id: 15,
      icon: forecast.forecast.forecastday[0].hour[15].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[15].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[15].time)
        .format("HH:mm A"),
    },
    {
      id: 16,
      icon: forecast.forecast.forecastday[0].hour[16].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[16].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[16].time)
        .format("HH:mm A"),
    },
    {
      id: 17,
      icon: forecast.forecast.forecastday[0].hour[17].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[17].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[17].time)
        .format("HH:mm A"),
    },
    {
      id: 18,
      icon: forecast.forecast.forecastday[0].hour[18].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[18].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[18].time)
        .format("HH:mm A"),
    },
    {
      id: 19,
      icon: forecast.forecast.forecastday[0].hour[19].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[19].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[19].time)
        .format("HH:mm A"),
    },
    {
      id: 20,
      icon: forecast.forecast.forecastday[0].hour[20].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[20].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[20].time)
        .format("HH:mm A"),
    },
    {
      id: 21,
      icon: forecast.forecast.forecastday[0].hour[21].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[21].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[21].time)
        .format("HH:mm A"),
    },
    {
      id: 22,
      icon: forecast.forecast.forecastday[0].hour[22].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[22].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[22].time)
        .format("HH:mm A"),
    },
    {
      id: 23,
      icon: forecast.forecast.forecastday[0].hour[23].condition.icon,
      temp: Math.round(forecast.forecast.forecastday[0].hour[23].temp_c),
      time: moment
        .utc(forecast.forecast.forecastday[0].hour[23].time)
        .format("HH:mm A"),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center mt-6 ">
        <p className="text-white font-medium uppercase">24 hour forcast</p>
      </div>
      <hr className="my-2 w-full" />

      <div className="flex flex-row items-center justify-between text-white overflow-x-scroll">
        {hourForecast.map(({ id, time, icon, temp }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-3"
          >
            <p className=" font-light text-sm">{time}</p>
            <img src={icon} alt="" className="w-10 my-1" />
            <p className=" font-medium">{temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
