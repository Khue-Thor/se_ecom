import React, { useContext } from "react";
import "./ItemCard.css";

export function ItemCard() {

 
  return (
    <div className="card" >
      <div className="card__content">
        
      </div>
      <img className="card__image" src={card.imageUrl} alt={card.name} />
    </div>
  );
}