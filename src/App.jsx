import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import TimeAndLocation from "./components/TimeAndLocation";
import Details from "./components/Details";

const API_KEY = "cfd5a3c5d473ebed2d404b7362727cc3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  // Intial Load
  useEffect(() => {
    fetch(`${BASE_URL}weather?q=London&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);
  // Fetch API
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setCity("");
        });
    }
  };

  const handleClick = () => {
    fetch(`${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setCity("");
      });
  };

  return (
    <div className=" flex justify-center mx-auto h-screen w-full bg-snowBg bg-center bg-cover py-5 lg:px-32 md:px-32">
      <main className=" flex flex-col h-fit w-full lg:w-2/3 text-slate-600 bg-slate-800 opacity-80 rounded-md py-2">
        <SearchBar
          city={city}
          setCity={setCity}
          search={search}
          handleClick={handleClick}
        />
        {typeof weather.main != "undefined" ? (
          <div>
            <TimeAndLocation weather={weather} />
            <Details weather={weather} />
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
