import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <Link to="/stocks">Stocks</Link>
      <Outlet />
    </div>
  );
};

export default Nav;
