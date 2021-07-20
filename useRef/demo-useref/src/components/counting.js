import React, { useState, forwardRef, useImperativeHandle } from "react";

function Count(props, ref) {
  let [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment,
    resetCount,
  }));

  const increment = () => {
    setCount((c) => c + 1);
  };

  const resetCount = () => {
    setCount((count = 0));
  };

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default forwardRef(Count);
