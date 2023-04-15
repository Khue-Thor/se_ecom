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
          <img className="recommend-product__image" src={headphone2}/>
          <img className="recommend-product__image" src={headphone3}/>
          <img className="recommend-product__image" src={headphone4}/>
        </li>
      </ul>
    </div>
  )
}