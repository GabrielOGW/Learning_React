import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrementar() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementar() {
    setCount((prevCount) => prevCount + 1);
  }

  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div className="UseState">
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <br />
      <div className="UseEffect">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;
