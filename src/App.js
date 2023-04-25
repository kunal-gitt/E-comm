import Header from "./Components/Layout/Header";

import "./App.css";

import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./Components/Products/Products";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addDetailsHandler = async (details) => {
    const response = await fetch(
      "https://react-http-bbcb8-default-rtdb.firebaseio.com/details.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <BrowserRouter>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact onAddDetails={addDetailsHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
