import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import carticon from "../../images/carticon.svg";
import "./Header.css";
import { AccountModal } from "../AccountModal/AccountModal";

export function Header({onAccountClick, onOrderClick, onCartClick}) {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" />

        <div className="header__co-container">
          <div className="header__search-wrapper">
            <input
              className="header__search-input"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <button type="button" className="header__search-button" />
          </div>

          <div className="header__menu-wrapper">
            <button className="header__button" onClick={onAccountClick}>Account</button>
            <button className="header__button" onTouchMove={}>Orders</button>
            <button className="header__button">
              <img src={carticon} />
              Cart
            </button>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
