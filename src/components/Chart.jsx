import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fetchChartData } from "../API/api";
import { chartConfig } from "../constants/ChartConfig";
import StockContext from "../Context/StockContext";
import {
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
  createDate,
} from "../helper/date-helper";
import ChartFilter from "./ChartFilter";

const Chart = () => {
  const { StockSymbol } = useContext(StockContext);
  const [data, setdata] = useState([]);

  const [filter, setfilter] = useState("1W");
  const formateData = (data) => {
    return data?.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);
      const startTimestampsUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return {
        startTimestampsUnix,
        endTimestampUnix,
      };
    };
    const updateChartDate = async () => {
      const { startTimestampsUnix, endTimestampUnix } = getDateRange();
      const resolution = chartConfig[filter].resolution;
      const response = await fetchChartData(
        StockSymbol,
        resolution,
        startTimestampsUnix,
        endTimestampUnix
      );
      setdata(formateData(response));
    };
    updateChartDate();
  }, [StockSymbol, filter]);

  return (
    <div className="h-full relative">
      <ul className="absolute top-2 right-2 flex z-50">
        {Object.keys(chartConfig).map((item, index) => {
          return (
            <li key={index}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setfilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data} className="text-sm ">
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#4361EE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4361EE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4361EE"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip />
          <XAxis dataKey={"date"} stroke="#4361EE" />
          <YAxis domain={["dataMin", "dataMax"]} stroke="#4361EE" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
