import { Fragment } from "react";

import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink, Route, Router } from "react-router-dom";
import About from "../../About";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>E-commerce</h1>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
