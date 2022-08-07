import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import StockData from "../stock-data";
import Dashboard from "../components/Dashboard";

const Stocks = () => {
  const param = useParams();

  return (
    <div>
      <Dashboard stock={StockData} />
      <Outlet />
    </div>
  );
};

export default Stocks;
