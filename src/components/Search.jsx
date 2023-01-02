import React from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { searchSymbols } from "../API/api";
const Search = () => {
  const [input, setinput] = useState("");
  const [bestMatchs, setbestMatchs] = useState([]);
  const clear = () => {
    setinput("");
    setbestMatchs([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResult = await searchSymbols(input);
        const result = searchResult.result;
        setbestMatchs(result);
      }
    } catch (error) {
      setbestMatchs([]);
    }
  };
  return (
    <div className="flex  items-center gap-1 px-2 my-4 mx-4 border-2  rounded-md relative z-50 max-w-[300px] w-full bg-light dark:bg-dark">
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="Search"
        className="w-full py-2  rounded-md focus:outline-none bg-light dark:bg-dark text-textLightPrimary dark:text-textDarkPrimary"
        // add a key === enter to get best matches
        onKeyDownCapture={(e) => {
          if (e.code == "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6  dark:stroke-textDarkSecondary stroke-textlightSecondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      {input && (
        <button onClick={() => updateBestMatches()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 stroke-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      )}

      {input && bestMatchs.length > 0 ? (
        <SearchResult result={bestMatchs} setinput={setinput} />
      ) : null}
    </div>
  );
};

export default Search;
