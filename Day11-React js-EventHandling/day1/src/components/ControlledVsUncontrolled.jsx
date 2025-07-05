import React, { useEffect, useState } from "react";

function ControlledVsUncontrolled() {
  let [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
    gender: "",
  });
  function wow() {
    console.log("This is wow function");
  }
  wow();
  function handleChange(e) {
    console.log("This is handle change function");
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    console.log("This is handle submit function");
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("You must agree to terms");
      return;
    }
    alert(`Registered user: ${formData.username}`);
  }

  useEffect(() => {
    // console.log("this works");
  });

  return (
    <>
      <button className="butotn" onClick={() => setCounter(counter++)}>
        Click me
      </button>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          Agree to terms
        </label>

        <div>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default ControlledVsUncontrolled;
