import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const stock = props.stock.map((stock, index) => {
    return (
      <div key={stock.name}>
        <Link to={`/stocks/${stock.symbol}`}>
          <li>{stock.name}</li>
        </Link>
      </div>
    );
  });
  return <div>{stock}</div>;
};

export default Dashboard;
