import React from "react";

const SearchBar = ({ city, handleKey, handleClick, inputChange }) => {
  return (
    <div className=" flex-nowrap flex flex-row justify-center my-6 min-w-lg w-full ">
      <div className=" flex flex-row w-3/4 items-center justify-center ">
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
