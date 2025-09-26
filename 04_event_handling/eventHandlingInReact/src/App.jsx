import "./App.css";

function App() {
  function handleClick() {
    alert("I Am Clicked.............");
  }
  function handleMouseOver() {
    alert("ParaGaraph pe mouse leke ayye ho..!");
  }

  function handleInputChannge(e) {
    console.log("Value till now:", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Pakka Form Submit kardu kya..!");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p onMouseOver={handleMouseOver} style={{ border: "1px solid black" }}>
          ParaGraph
        </p>
        <button onClick={handleClick}>Click Me</button>
        <br />
        <br />
        <input type="text" onChange={handleInputChannge}></input>
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </>
  );
}

export default App;
