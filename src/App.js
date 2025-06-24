import React from "react";
import PasswordToggle from "./components/PasswordToggle";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="counter-box">
        <h1>PasswordToggle</h1>
        <PasswordToggle />
      </div>
    </div>
  );
}

export default App;
