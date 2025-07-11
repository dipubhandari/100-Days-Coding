import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  let [amount, setAmount] = useState(0);
  const day = useSelector((state) => state.track.value);
  function handleChange(e) {
    console.log("this works");
    console.log(e);
  }
  return (
    <div className="App">
      <h1>Learning Redux Toolkit</h1>
      <h2>Day {day}</h2>
      <br />
      <head></head>
      <input
        type="text"
        placeholder="Enter the amount"
        value={amount}
        name="value"
        onChange={handleChange()}
      />
      <br />
      <button>Plus day</button> <span> </span>
      <button>Minus day</button>
    </div>
  );
}

export default App;
