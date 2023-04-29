// import Header from "./Components/Layout/Header";

// import "./App.css";

// import Cart from "./Components/Cart/Cart";
// import { useContext, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Products from "./Components/Products/Products";
// import Home from "./Components/Home";
// import Contact from "./Components/Contact";
// import About from "./About";
// import Product from "./Components/Product";
// import Login from "./Login";
// import AuthContext from "./Components/Store/auth-context";

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   const addDetailsHandler = async (details) => {
//     const response = await fetch(
//       "https://react-http-bbcb8-default-rtdb.firebaseio.com/details.json",
//       {
//         method: "POST",
//         body: JSON.stringify(details),
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );
//   };

//   return (
//     <div>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />

//         <Route path="/about" element={<About />} />
//         <Route
//           path="/contact"
//           element={<Contact onAddDetails={addDetailsHandler} />}
//         />
//         <Route path="/product" element={<Product />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
