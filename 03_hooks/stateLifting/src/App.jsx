import { useState } from "react";
import Bulb from "./components/bulb";
import SwitchButton from "./components/SwitchButton";
import "./App.css";
// Parent Component (State yaha rakhenge)
function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <Bulb isOn={isOn} />
      <SwitchButton isOn={isOn} toggleBulb={toggleBulb} />
    </div>
  );
}

export default App;
