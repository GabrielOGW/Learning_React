import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import State from "./routes/components/state";
import Effect from "./routes/components/effect";
import Memo from "./routes/components/memo";
import Ref from "./routes/components/ref";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/components/state.js",
    element: <State/>,
  },
  {
    path: "/components/effect.js",
    element: <Effect/>,
  },
  {
    path: "/components/memo.js",
    element: <Memo/>,
  },
  {
    path: "/components/ref.js",
    element: <Ref/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);