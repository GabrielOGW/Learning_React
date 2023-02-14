import { useState } from "react";
import Select from "./Select"

const options = [
  {label: "Primeiro", value: 1},
  {label: "Segundo", value: 2},
  {label: "Terceiro", value: 3},
  {label: "Quarto", value: 4},
  {label: "Quinto", value: 5}
]

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])

  return (
    <>
    <Select options={options} value={value} onChange={o => setValue(o)} />
    </>
  )
}

export default App
