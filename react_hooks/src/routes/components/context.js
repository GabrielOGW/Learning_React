import React from "react";
import FunctionContextComponent from "./functionContextComponent.js";
import { ThemeProvider } from "./ThemeContext.js";

export default function Context() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
