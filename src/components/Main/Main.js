import React from "react";
import { RecommendProducts } from "../RecommendProducts/RecommendProducts";
import { ItemCard } from "../ItemCard/ItemCard";
import "./Main.css"

export function Main() {
  return (
    <main className="main">
       
      <div className="main__container">
      <RecommendProducts/>
       <ul className="main__item-lists">
       <ItemCard/>
       <ItemCard/>
       <ItemCard/>
       <ItemCard/>
       <ItemCard/>
       <ItemCard/>
       </ul>
      </div>
    </main>
  )
}