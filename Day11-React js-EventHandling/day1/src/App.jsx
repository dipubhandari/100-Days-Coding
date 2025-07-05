import "./App.css";
// import Contact from "./components/Contact";
import ControlledVsUncontrolled from "./components/ControlledVsUncontrolled";
import LiftingStateUp from "./components/LiftingStateUp";
import UseEffectHook from "./components/UseEffectHook";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const importantData = {
    name: "Dippu",
    location: "Nepal",
    profession: "Software Engineer",
  };
  const getInfo = (info) => {
    console.log(info);
  };
  return (
    <div className="App">
      {/* <h1>Event Hanlding in react js</h1> */}
      {/* <h1>Controlled Vs Uncontrolled</h1> */}
      {/* <ControlledVsUncontrolled /> */}
      {/* <UseEffectHook /> */}
      {/* <Contact />
      <LiftingStateUp data={importantData} getInfo={getInfo} /> */}
      <h1>React Router</h1>
      {/* ALl route inside toutes */}
      <Routes>
        <Route path="/hello" element={<h1>Home Page</h1>} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
