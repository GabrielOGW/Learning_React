import React, {useEffect, useState} from 'react'

export default function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(1))
    console.log("atualizando items")
  }, [getItems])
  return (
    items.map(item => <div key={item}>{item}</div>)
  )
}
