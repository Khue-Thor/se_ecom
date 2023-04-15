import React from "react";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <button type="button" className="navbar__button">
          All
        </button>
        <button type="button" className="navbar__button">
          Best Seller
        </button>
        <button type="button" className="navbar__button">
          Phone Accessories
        </button>
        <button type="button" className="navbar__button">
          Desk Accessories
        </button>
        <button type="button" className="navbar__button">
          Speakers
        </button>
        <button type="button" className="navbar__button">
          Watches
        </button>
      </div>
    </div>
  );
}
