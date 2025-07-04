import React, { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const fruits = ["Apple", "mandrine", "Kiwi", "Grapes"];
  // this runs when i click the send btn
  const send = (e) => {
    e.preventDefault();
    console.log("button clicked");
  };
  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name);
    console.log([name]);
    console.log(value);
    setInput({ ...input, [name]: value });
  }
  return (
    <div>
      <form action="" onSubmit={send}>
        <input
          type="text"
          onChange={handleChange}
          value={input.username}
          placeholder="Username"
          name="username"
        />
        <br />
        <input
          type="password"
          onChange={handleChange}
          value={input.password}
          placeholder="Password"
          name="password"
        />
        <br />
        <input type="submit" value="Send" />
      </form>
      <h3>All fruits</h3>
      {fruits.map((item) => {
        return <li key={Math.random()}>{item}</li>;
      })}
    </div>
  );
};

export default Contact;
