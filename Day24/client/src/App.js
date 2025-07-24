import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const server = "http://localhost:5000";

  useEffect(() => {
    async function getData() {
      await axios(`${server}/api/data`)
        .then((response) => {
          console.log("this runs");
          console.log(response.data);
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Chai ani code {data.length}</h1>
    </div>
  );
}

export default App;
