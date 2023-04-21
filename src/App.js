import Header from "./Components/Layout/Header";

import "./App.css";
import Meals from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Store/CartProvider";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import About from "./About";
import AvailableProducts from "./Components/Products/AvailableProducts";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}></Header>
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
