import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import SingleStock from "./pages/SinglesStock";
import { CssBaseline, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Nav />
        <Typography variant="h1">Stonk Lab</Typography>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/stocks/:symbol" element={<SingleStock />} />
        </Routes>
      </CssBaseline>
    </div>
  );
}

export default App;
