import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import State from "./routes/components/state";
import Effect from "./routes/components/effect";
import Memo from "./routes/components/memo";
import Ref from "./routes/components/ref";
import Context from "./routes/components/context";
import Reducer from "./routes/components/reducer";
import Callback from "./routes/components/callback";
import CustomHook from "./routes/components/customHook";
import LayoutEffect from "./routes/components/layoutEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/components/state.js",
        element: <State />,
      },
      {
        path: "/components/effect.js",
        element: <Effect />,
      },
      {
        path: "/components/memo.js",
        element: <Memo />,
      },
      {
        path: "/components/ref.js",
        element: <Ref />,
      },
      {
        path: "/components/context.js",
        element: <Context />,
      },
      {
        path: "/components/reducer.js",
        element: <Reducer />,
      },
      {
        path: "/components/callback.js",
        element: <Callback />,
      },
      {
        path: "/components/customHook.js",
        element: <CustomHook />,
      },
      {
        path: "/components/layoutEffect.js",
        element: <LayoutEffect />,
      },
    ]
  },
  
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
