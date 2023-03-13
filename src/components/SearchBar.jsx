import React from "react";

const SearchBar = ({ city, search, setCity, handleClick }) => {
  return (
    <div className=" flex-nowrap flex flex-row justify-center my-6 min-w-lg w-full ">
      <div className="relative flex flex-row w-3/4 items-center justify-center ">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 w-full shadow-xl  focus:outline-none capitalize placeholder:lowercase "
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyDown={search}
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => console.log("click")}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
