import React, { useContext } from "react";
import "./ItemCard.css";
import { speaker } from "../../utils/assests";

export function ItemCard() {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={speaker} />
        <div className="card__detail">
          <p className="card__description">
            Upgraded, Anker Soundcore Bluetooth Speaker with IPX5 Waterproof, Stereo Sound, 24H
            Playtime, Portable Wireless Speaker for iPhone, Samsung and More
          </p>
          <p className="card__price">
            price: <span className="card__price-number">$99.9</span>
          </p>
          <button type="button" className="card__add-button card__button">
            Add To Cart
          </button>
          <button type="button" className="card__add-checkout card__button">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
