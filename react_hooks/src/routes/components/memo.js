import React, { useState, useMemo, useEffect } from "react";

export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return{
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",}
  }, [dark]);

  useEffect(() => {
    console.log('Theme changed');
  }, [themeStyles])

  function slowFunction(num) {
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  }
  return (
    <div className="useMemo">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
