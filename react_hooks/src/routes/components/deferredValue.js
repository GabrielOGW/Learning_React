import React, { useState, useMemo, useDeferredValue, useEffect } from "react";

export default function DeferredValue() {
  const [input, setInput] = useState(""); 
  const deferedInput = useDeferredValue(input)
  
  const LIST_SIZE = 20000;

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferedInput}</div>);
    }
    return l;
  }, [deferedInput]);

  function handleChange(e) {
    setInput(e.target.value)
  }

  useEffect(() => {
    console.log(`input: ${input}\nDeferreed: ${DeferredValue}`)
  })

  return( 
    <>
    <input type="text" value={input} onChange={handleChange}/>
    {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
    
    )
}
