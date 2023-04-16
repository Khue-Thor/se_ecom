import React from "react";
import "./RecommendProducts.css";
import {headphone1,
  headphone2,
  headphone3,
  headphone4,} from '../../utils/assests';

export function RecommendProducts() {
  return (
    <div className="recommend-products__container">
      <ul className="recommend-products__lists">
        <li className="recommend-products__list">
          <img className="recommend-product__image" src={headphone1}/>
          <div className="card__detail">
          <p className="card__description">
            Upgraded, Anker Soundcore Bluetooth Speaker with IPX5 Waterproof, Stereo Sound, 24H
            Playtime, Portable Wireless Speaker for iPhone, Samsung and More
          </p>
          <p className="card__price">$99.99</p>
        </div>
        </li>
        <li className="recommend-products__list">
          <img className="recommend-product__image" src={headphone2}/>
        </li>
        <li className="recommend-products__list">
          <img className="recommend-product__image" src={headphone3}/>
        </li>
        <li className="recommend-products__list">
          <img className="recommend-product__image" src={headphone4}/>
        </li>
        <li className="recommend-products__list">
          <img className="recommend-product__image" src={headphone4}/>
        </li>
      </ul>
    </div>
  )
}