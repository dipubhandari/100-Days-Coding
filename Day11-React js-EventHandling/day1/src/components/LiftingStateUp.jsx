import React, { useEffect } from "react";

const LiftingStateUp = (props) => {
  console.log(props.data.name);
  props.getInfo("this is lifting state up");

  return (
    <div>
      <h1>Lifting State up in js</h1>
    </div>
  );
};

export default LiftingStateUp;
