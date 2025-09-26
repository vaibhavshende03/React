import { React } from "react";

// Bulb Component
function Bulb({ isOn }) {
  return (
    <div>
      <h2>💡 Bulb is {isOn ? "ON" : "OFF"}</h2>
    </div>
  );
}

export default Bulb;
