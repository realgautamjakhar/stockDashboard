import React from "react";

const OverView = ({ symbol, quote }) => {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-4 duration-1000 ease-in">
      <h2 className=" text-textLightPrimary dark:text-textDarkPrimary text-2xl font-medium">
        {symbol}
      </h2>
      <div className=" h-full grid gap-4">
        <div className="flex justify-around items-center">
          <p className="text-4xl font-semibold text-textLightPrimary dark:text-textDarkPrimary">
            {quote.c}
          </p>
          {quote.d < 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 stroke-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-6 h-6 stroke-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          )}
          <p
            className={`${
              quote.d < 0 ? "text-red-600" : "text-green-600"
            } text-lg`}
          >
            {quote.d}
          </p>
        </div>
        <div className=" flex gap-4 w-full items-center justify-center text-sm text-textlightSecondary dark:text-textDarkSecondary">
          <p>High : {quote.h}</p>
          <p>Low : {quote.l}</p>
          <p>Opening : {quote.o}</p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
