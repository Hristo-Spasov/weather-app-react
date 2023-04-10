import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import TimeAndLocation from "./components/TimeAndLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const FORECAST_KEY = import.meta.env.VITE_FORECAST_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [background, setBackground] = useState("");

  const geolocationAPI = navigator.geolocation;

  // Intial Load

  useEffect(() => {
    geolocationAPI.getCurrentPosition((position) => {
      const { coords } = position;
      const lat = coords.latitude.toFixed(2);
      const lon = coords.longitude.toFixed(2);
      const flat = coords.latitude; //forecast latitube
      const flon = coords.longitude; //forecast longitude
      //! Open weather API use Lat,Lon that are fixed to the second decimal
      fetch(
        `${BASE_URL}weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));

      //! weatherapi uses the full length of the coords
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${FORECAST_KEY}&q=${flat},${flon}&days=1&aqi=no&alerts=no`
      )
        .then((res) => res.json())
        .then((data) => setForecast(data));
    });
  }, [setForecast]);

  // Dynamic background
  useEffect(() => {
    if (weather && weather.weather) {
      const condition = weather.weather[0].main;
      if (condition === "Clear") {
        setBackground("bg-clearBg");
      } else if (condition === "Clouds") {
        setBackground("bg-cloudsBg");
      } else if (condition === "Drizzle") {
        setBackground("bg-drizzleBg");
      } else if (condition === "Mist" || condition === "Fog") {
        setBackground("bg-mistBg");
      } else if (condition === "Rain") {
        setBackground("bg-rainBg");
      } else if (condition === "Thunderstorm") {
        setBackground("bg-thunderstormBg");
      } else {
        setBackground("bg-snowBg");
      }
    }
  }, [weather]);

  //* Get current weather
  const getWeather = () => {
    fetch(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };
  //* Forecast API
  const getForecast = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${FORECAST_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data));
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      getWeather();
      getForecast();
      setCity("");
    }
  };

  const handleClick = () => {
    if (!city) return;
    getWeather();
    getForecast();
    setCity("");
  };

  const inputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div
      className={`flex justify-center mx-auto h-screen w-full ${background} bg-center bg-cover py-5 lg:px-32 md:px-32 `}
    >
      <main className=" flex flex-col h-fit w-full lg:w-2/3 text-slate-600 bg-slate-800 opacity-80 rounded-md py-2">
        <SearchBar
          city={city}
          setCity={setCity}
          handleKey={handleKey}
          handleClick={handleClick}
          inputChange={inputChange}
        />
        {typeof weather.main != "undefined" &&
        typeof forecast.forecast != "undefined" ? (
          <div>
            <TimeAndLocation weather={weather} forecast={forecast} />
            <Details weather={weather} />
            <Forecast forecast={forecast} />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
