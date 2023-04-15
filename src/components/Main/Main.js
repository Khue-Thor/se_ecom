import React from "react";
import { RecommendProducts } from "../RecommendProducts/RecommendProducts";
import "./Main.css"

export function Main() {
  return (
    <main className="main">
      <div className="main__container">
      <RecommendProducts/>
      </div>
    </main>
  )
}