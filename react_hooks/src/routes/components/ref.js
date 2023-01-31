import React, { useState, useRef, useEffect } from "react";

export default function Ref() {
  const [name, setName] = useState("");
  const renderCount = useRef(1)
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
      <div>Meu nome é {name}</div>
      <button onClick={focus}>Foco</button>
      <div>Fui renderizado {renderCount.current} vezes</div>
    </>
  )
}
