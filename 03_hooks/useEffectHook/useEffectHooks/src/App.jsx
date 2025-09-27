import "./App.css";
// import { useEffect, useState } from "react";
import DataFetcher from "./components/DataFetcher";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  {
    /*
  useEffect(() => {
    // effect logic here
    console.log("first");

    return () => {
      // cleanup logic here
      console.log("second");
    };
  }, []); // add dependencies as needed

  */
  }

  //Different Variations of useEffect
  //-------------------------------------------------
  {
    /*
  // Variations :1
  //runs on evey render

  useEffect(() => {
    alert("I am run on Every render.");
  });
*/
  }
  //-------------------------------------------------
  {
    /*
    // Variations :2
    //run only on first render

    useEffect(() => {
      alert("I am run only on first render");
    }, []);
  }
*/
  }

  //-------------------------------------------------
  {
    /*
  // Variations :3
  //run on every times when the count dependencies update

  useEffect(() => {
    alert("I am run on every times when the count dependencies update");
  }, [count]);
  
*/
  }
  //-------------------------------------------------
  {
    /*
  //Variations :4
  //Multiple Dependencies

  useEffect(() => {
    //run on every times when the count/total dependencies update
    alert("I am run on every times when the count dependencies update");
  }, [count, total]);
*/
  }
  //-------------------------------------------------
  {
    /*
  //Variation :5
  //this time let's add cleanup function

  useEffect(() => {
    alert("count is updated");

    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]);
*/
  }
  //-------------------------------------------------

  // function handleClick() {
  //   setCount(count + 1);
  // }
  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <>
      <DataFetcher />
      {/* <h1>Count:{count}</h1>
      <button onClick={handleClick}>Update Count</button>
      <h1>Total:{total}</h1>
      <button onClick={handleClickTotal}>Update Total</button> */}
    </>
  );
}

export default App;
