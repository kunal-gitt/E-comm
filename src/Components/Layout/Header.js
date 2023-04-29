// import { Fragment, useContext } from "react";

// import classes from "../Layout/Header.module.css";
// import HeaderCartButton from "./HeaderCartButton";
// import { NavLink, Route, Router } from "react-router-dom";
// import About from "../../About";
// import AuthContext from "../Store/auth-context";

// const Header = (props) => {
//   const authCtx = useContext(AuthContext);

//   const isLoggedIn = authCtx.isLoggedIn;

//   console.log(isLoggedIn);
//   return (
//     <Fragment>
//       <header className={classes.header}>
//         <NavLink to="/">
//           <h1>E-commerce</h1>
//         </NavLink>
//         {isLoggedIn && <NavLink to="/products">Products</NavLink>}

//         <NavLink to="/about">About</NavLink>
//         <NavLink to="login">Login</NavLink>
//         <NavLink to="/contact">Contact Us</NavLink>

//         <HeaderCartButton onClick={props.onShowCart} />
//       </header>
//     </Fragment>
//   );
// };

// export default Header;
