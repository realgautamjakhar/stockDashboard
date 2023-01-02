import React from "react";
import { useContext } from "react";
import StockContext from "../Context/StockContext";

const SearchResult = ({ result, setinput }) => {
  const { setStockSymbol } = useContext(StockContext);
  const handleStockSelection = (item) => {
    setinput("");
    setStockSymbol(item.symbol);
  };
  return (
    <ul className="absolute top-12 left-0 border-2 w-full rounded-md h-64 overflow-y-scroll custom-scroll bg-white border-neutral-200 z-[200]">
      {result?.map((item) => {
        return (
          <li
            key={item.symbol}
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-accent/50 hover:text-white duration-300 ease-in-out"
            onClick={() => handleStockSelection(item)}
          >
            <span className=" text-textLightPrimary">{item.symbol}</span>
            <span className=" text-textlightSecondary text-xs text-end max-w-[70%]">
              {item.description}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResult;
