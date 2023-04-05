import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TimeAndLocation from "./components/TimeAndLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";

const API_KEY = "cfd5a3c5d473ebed2d404b7362727cc3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const FORECAST_KEY = "ccd47e17e1794027a3b71444230803";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

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
        `http://api.weatherapi.com/v1/forecast.json?key=${FORECAST_KEY}&q=${flat},${flon}&days=1&aqi=no&alerts=no`
      )
        .then((res) => res.json())
        .then((data) => setForecast(data));
    });
  }, []);

  //* Get current weather
  const getWeather = () => {
    fetch(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };
  //* Forecast API
  const getForecast = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${FORECAST_KEY}&q=${city}&days=1&aqi=no&alerts=no`
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
    <div className=" flex justify-center mx-auto h-screen w-full bg-snowBg bg-center bg-cover py-5 lg:px-32 md:px-32 ">
      <main className=" flex flex-col h-fit w-full lg:w-2/3 text-slate-600 bg-slate-800 opacity-80 rounded-md py-2">
        <SearchBar
          city={city}
          setCity={setCity}
          handleKey={handleKey}
          handleClick={handleClick}
          inputChange={inputChange}
        />
        {typeof weather.main != "undefined" ? (
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
