import React from "react";
import { GoLocation } from "react-icons/go";

const SearchBar = ({ city, handleKey, handleClick, inputChange }) => {
  return (
    <div className=" flex-nowrap flex flex-row justify-center my-6 min-w-lg w-full ">
      <div className=" flex flex-row w-3/4 items-center justify-center ">
        <GoLocation
          size={18}
          className=" md:flex-shrink-0 lg:flex-shrink-0 text-white cursor-pointer ease-out hover:scale-125 md:mx-4 lg:mx-4 sm:mx-4"
        />
        <input
          type="text"
          placeholder="search for city..."
          className="rounded-l-md  lg:w-3/4 text-xl font-light py-3 px-2  shadow-xl  focus:outline-none capitalize placeholder:lowercase lg:placeholder:text-center "
          onChange={inputChange}
          value={city}
          onKeyDown={handleKey}
        />
        <button
          type="button"
          className=" rounded-r-md  bg-slate-800 text-white py-3 border-2 px-2 border-white duration-300 ease-out hover:scale-105"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
