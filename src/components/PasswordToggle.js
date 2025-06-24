import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='Counter'>
      {/* <h2>Şifre Göster/Gizle</h2> */}
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}
        style={{ marginLeft: "10px", fontSize: "18px" }}
        aria-label="Toggle Password Visibility">      
        {showPassword ? <FaEye/> : <FaEyeSlash/>}
      </button>
    </div>
  );
}

export default PasswordToggle;
