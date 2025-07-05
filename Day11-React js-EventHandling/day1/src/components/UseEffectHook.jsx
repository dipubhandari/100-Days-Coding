import React, { useEffect, useState } from "react";

const UseEffecHook = () => {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [counter3, setCounter3] = useState(0);
  function callOnce() {
    console.log("This is called once");
  }

  useEffect(() => {
    callOnce();
  }, [counter]);

  return (
    <div>
      <h1>Use Effect in React Js</h1>
      {counter} <br />
      <button onClick={() => setCounter(counter++)}>Click Me</button> <br />
      {counter3} <br />
      <button onClick={() => setCounter3(counter3++)}>Click Me2</button>
    </div>
  );
};

export default UseEffecHook;
