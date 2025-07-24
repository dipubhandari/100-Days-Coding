import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setState] = useState([]);

  useEffect(() => {
    console.log("this works");
  }, []);

  return (
    <div className="App">
      <h1>Chai ani code {data.length}</h1>
    </div>
  );
}

export default App;
