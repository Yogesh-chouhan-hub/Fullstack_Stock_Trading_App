import React, { useState } from "react";
import { watchlist } from "../data/data";
import BuyWindow from "./BuyWindow";
import {
  BarChart,
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import "../App.css";
import SellWindow from "./SellWindow";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const [search, setSearch] = useState("");
  const [showBuyWindow, setShowBuyWindow] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [showSellWindow, setShowSellWindow] = useState(false);
  const [selectedSellStock, setSelectedSellStock] = useState(null);

  const handleBuy = (stock) => {
    setSelectedStock(stock);
    setShowBuyWindow(true);
  };
  const handleSell = (stock) => {
    setSelectedSellStock(stock);
    setShowSellWindow(true);
  };

  const closeBuyWindow = () => {
    setShowBuyWindow(false);
    setSelectedStock(null);
  };
  const closeSellWindow = () => {
    setShowSellWindow(false);
    setSelectedSellStock(null);
  };

  const filteredStocks = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase()),
  );

  const labels = watchlist.map((subArrar) => {
    return subArrar["name"];
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((stock) => {
          return stock.price;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
  // };

  return (
    <div className="watchlist-container">
      <div className="watchlist-search">
        <input
          type="text"
          placeholder="Search eg: INFY, TCS..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>{filteredStocks.length}/50</span>
      </div>

      <ul className="watchlist">
        {filteredStocks.map((stock, index) => (
          <WatchListItem
            key={index}
            stock={stock}
            handleBuy={handleBuy}
            handleSell={handleSell}
          />
        ))}
      </ul>
      <DoughnutChart data={data} />
      {showBuyWindow && (
        <BuyWindow stock={selectedStock} close={closeBuyWindow} />
      )}
      {showSellWindow && (
        <SellWindow stock={selectedSellStock} close={closeSellWindow} />
      )}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, handleBuy, handleSell }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="watchlist-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="stock-details">
        <p className={stock.isDown ? "text-danger" : "text-success"}>
          {stock.name}
        </p>

        <div className="stock-price">
          <span>{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown fontSize="small" />
          ) : (
            <KeyboardArrowUp fontSize="small" />
          )}

          <span>₹{stock.price}</span>
        </div>
      </div>

      {hover && (
        <div className="watchlist-actions">
          <button className="buy" onClick={() => handleBuy(stock)}>
            Buy
          </button>

          <button className="sell" onClick={() => handleSell(stock)}>
            Sell
          </button>

          <button className="icon-btn">
            <BarChartOutlined fontSize="small" />
          </button>

          <button className="icon-btn">
            <MoreHoriz fontSize="small" />
          </button>
        </div>
      )}
    </li>
  );
};
