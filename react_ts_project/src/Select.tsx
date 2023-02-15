import { useState } from "react";
import SelectComponent, { SelectOption } from "./components/SelectComponent";

const options = [
  { label: "Primeiro", value: 1 },
  { label: "Segundo", value: 2 },
  { label: "Terceiro", value: 3 },
  { label: "Quarto", value: 4 },
  { label: "Quinto", value: 5 },
];

export default function Select() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <SelectComponent
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
    <br/>
      <SelectComponent options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  );
}