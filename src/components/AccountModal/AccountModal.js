import React from "react";
import "./AccountModal.css";
import { Link } from "react-router-dom";

export function AccountModal({ onAccountCLose }) {
  return (
    <div className="modal modal__content" onMouseLeave={onAccountCLose}>
      <div className="modal__container">
        <Link to={"/signin"}>
          <button className="modal__signin-link">Sign In</button>
        </Link>
        <p>
          New customer?{" "}
          <Link to={"/signup"} className="modal__signup-link">
            Start here
          </Link>
        </p>
      </div>
    </div>
  );
}
