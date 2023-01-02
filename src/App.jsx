import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StockContext from "./Context/StockContext";

import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  const [StockSymbol, setStockSymbol] = useState("AAPL");

  return (
    <ThemeProvider>
      <StockContext.Provider value={{ StockSymbol, setStockSymbol }}>
        <div className="App bg-[url('/assets/bg.svg')] dark:bg-dark bg-light">
          <Dashboard />
        </div>
      </StockContext.Provider>
    </ThemeProvider>
  );
}

export default App;
