import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import "./App.css";
import { AccountModal } from "../AccountModal/AccountModal";

function App() {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleOpenAccountModal = () => setIsAccountModalOpen(true);

  const closeModal = () => {
    setIsAccountModalOpen(false);
  };

  useEffect(() => {
    function handleOverlayClose(e) {
      if (!e.target.closest(".modal__content")) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  return (
    <div className="App">
      <div className="App__content">
        <Header onAccountOpen={handleOpenAccountModal} />
        <Main />
      </div>
      {isAccountModalOpen && <AccountModal onAccountCLose={closeModal} />}
    </div>
  );
}

export default App;
