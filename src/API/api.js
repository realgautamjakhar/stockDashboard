const baseAPIpath = "https://finnhub.io/api/v1";
const FINNHUB_API = "ceo79qiad3icu103ab10ceo79qiad3icu103ab1g";
export const searchSymbols = async (query) => {
  const url = `${baseAPIpath}/search?q=${query}&token=${FINNHUB_API}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured`;
    console.log(message);
  }
  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${baseAPIpath}/stock/profile2?symbol=${stockSymbol}&token=${FINNHUB_API}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured`;
    console.log(message);
  }
  return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
  const url = `${baseAPIpath}/quote?symbol=${stockSymbol}&token=${FINNHUB_API}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured`;
    console.log(message);
  }
  return await response.json();
};

export const fetchChartData = async (stockSymbol, resolution, from, to) => {
  const url = `${baseAPIpath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${FINNHUB_API}`;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured`;
    console.log(message);
  }
  return await response.json();
};
