import React from "react";
import "./AccountModal.css";
import { Link } from "react-router-dom";

export function AccountModal() {
  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__signin-link">Sign In</button>
        <p>
          New customer? <Link to={"/signup"} className="modal__signup-link">Start here</Link>
        </p>
      </div>
    </div>
  );
}
