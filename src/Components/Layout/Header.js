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

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
