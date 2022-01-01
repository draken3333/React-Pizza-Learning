import React from "react";
import "macro-css";
import { Header } from "./components/index";
import { Home, Cart } from "./pages/index";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
