import React, { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  function decrementar() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementar() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="UseState">
      <button onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
}
