import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { fetchQuote, fetchStockDetails } from "../API/api";
import StockContext from "../Context/StockContext";
import Chart from "./Chart";
import Header from "./Header";
import OverView from "./OverView";
import StockDetails from "./StockDetails";

const Dashboard = () => {
  const { StockSymbol } = useContext(StockContext);
  const [stockDetails, setstockDetails] = useState({});
  const [quote, setquote] = useState({});
  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const response = await fetchStockDetails(StockSymbol);
        setstockDetails(response);
      } catch (error) {
        console.log(error);
      }
    };
    const updateQouteDetails = async () => {
      try {
        const response = await fetchQuote(StockSymbol);
        setquote(response);
      } catch (error) {
        console.log(error);
      }
    };
    updateStockDetails();
    updateQouteDetails();
  }, [StockSymbol]);
  return (
    <main className=" min-h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-[repeat(6,200px)] md:grid-rows-[repeat(7,1fr)] xl:grid-rows-5 auto-rows-fr gap-6 p-4">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <Header name={stockDetails.name} />
      </div>
      <div className="md:col-span-2 row-span-2 md:row-span-4 card">
        <Chart />
      </div>
      <div className="card">
        <OverView quote={quote} symbol={stockDetails.ticker} />
      </div>
      <div className="row-span-2 xl:row-span-3  card">
        <StockDetails stockDetails={stockDetails} />
      </div>
    </main>
  );
};

export default Dashboard;
