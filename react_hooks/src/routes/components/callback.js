import React, { useState, useCallback } from "react";
import List from "./List";

export default function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((incrementador) => {
    return [number + incrementador, number + 1+ incrementador, number + 2+ incrementador];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Alterar Tema
      </button>
      <List getItems={getItems} />
    </div>
  );
}
