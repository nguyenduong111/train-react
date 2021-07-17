import React, { useState } from "react";

function Con(props) {
  let [myName, setName] = useState({
    name: "abc",
  });

  const onClick = () => {
    setName({
      name: props.name,
    });
  };

  return (
    <div>
      <h2> {myName.name} </h2>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default Con;
