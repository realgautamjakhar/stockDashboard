import React from "react";

const StockDetails = ({ stockDetails }) => {
  return (
    <ul className=" flex flex-col justify-around h-full px-4">
      <li className="flex justify-between">
        <span className="text-sm text-textlightSecondary dark:text-textDarkSecondary">
          Name
        </span>{" "}
        <p className=" text-lg text-textLightPrimary dark:text-textDarkPrimary font-medium">
          {stockDetails.name}
        </p>
      </li>
      <li className="flex justify-between">
        <span className="text-sm text-textlightSecondary dark:text-textDarkSecondary">
          Country
        </span>{" "}
        <p className=" text-lg text-textLightPrimary dark:text-textDarkPrimary font-medium">
          {stockDetails.country}
        </p>
      </li>
      <li className="flex justify-between">
        <span className="text-sm text-textlightSecondary dark:text-textDarkSecondary">
          Currency
        </span>{" "}
        <p className=" text-lg text-textLightPrimary dark:text-textDarkPrimary font-medium">
          {stockDetails.currency}
        </p>
      </li>
      <li className="flex justify-between">
        <span className="text-sm text-textlightSecondary dark:text-textDarkSecondary">
          Exchange
        </span>{" "}
        <p className=" text-lg text-textLightPrimary dark:text-textDarkPrimary font-medium">
          {stockDetails.exchange}
        </p>
      </li>
      <li className="flex justify-between">
        <span className="text-sm text-textlightSecondary dark:text-textDarkSecondary">
          IPO Date
        </span>{" "}
        <p className=" text-lg text-textLightPrimary dark:text-textDarkPrimary font-medium">
          {stockDetails.ipo}
        </p>
      </li>
      <li className="flex justify-between">
        <span className="text-sm text-textlightSecondary dark:text-textDarkSecondary">
          Industry
        </span>{" "}
        <p className=" text-lg text-textLightPrimary dark:text-textDarkPrimary">
          {stockDetails.finnhubIndustry}
        </p>
      </li>
    </ul>
  );
};

export default StockDetails;
