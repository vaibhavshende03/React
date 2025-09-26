import React from "react";
// Button Component
function SwitchButton({ isOn, toggleBulb }) {
  return <button onClick={toggleBulb}>{isOn ? "Turn OFF" : "Turn ON"}</button>;
}

export default SwitchButton;
