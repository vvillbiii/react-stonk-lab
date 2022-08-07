import React from "react";
import { useParams } from "react-router-dom";
import StockData from "../stock-data";

const SingleStock = () => {
  const param = useParams();
  const symbol = param.symbol;
  const stock = StockData.find((stock) => stock.symbol === symbol);

  return (
    <div>
      <h1>{stock.name}</h1>
      <p>${stock.lastPrice}</p>
    </div>
  );
};

export default SingleStock;
