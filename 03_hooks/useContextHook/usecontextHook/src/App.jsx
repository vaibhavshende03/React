import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//Step1:Create a context provider
const UserContext = createContext();

//Step2:wrap all the child component inside a provider

// step3 :pass the value

//step 4: Consumer ke andar jake ke consume karlo
function App() {
  // step3 :pass the value

  const [user, setUser] = useState({ name: "vaibhav" });
  return (
    <>
      {/* //Step2:wrap all the child component inside a provider
      // // step3 :pass the value */}
      <UserContext.Provider value={{ user, setUser }}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;

//whatever context i created i have need to export it
export { UserContext };
