import React, { useState, useLayoutEffect } from 'react'

export default function LayoutEffect() {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    console.log(count);
  }, [count])
  return (
    <>
      <button onClick={() => setCount(c => c+ 1)}>Incrementar</button>
      <div>{count}</div>
    </>
  )
}
