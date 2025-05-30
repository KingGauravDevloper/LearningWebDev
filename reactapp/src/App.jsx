import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./App.css";

export default function App() {
  
  const [show, setShow] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="password-container">
      <button className='micon'>&#9776; onClick={()=>setMenuStatus(!menuStatus)}</button>
        <div className={'menu ${menuStatus ?'activeMenu':''}'}>
      <input
        type={show ? "text" : "password"}  
        className="password-input"
        placeholder="Enter Password"
      />
      <button
        type="button"
        className="toggle-button"
        onClick={() => setShow((prev) => !prev)}
        aria-label={show ? "Hide password" : "Show password"}  
      >
        {show ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
}

