import { Link, Outlet } from "react-router-dom";
import './navbar.css'


export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h2>React Hooks</h2>
        <nav>
          <ul>
            <li>
              <Link to={`/components/state.js`}>State</Link>
            </li>
            <li>
              <Link to={`/components/effect.js`}>Effect</Link>
            </li>
            <li>
              <Link to={`/components/memo.js`}>Memo</Link>
            </li>
            <li>
              <Link to={`/components/ref.js`}>Ref</Link>
            </li>
            <li>
              <Link to={`/components/context.js`}>Context</Link>
            </li>
            <li>
              <Link to={`/components/reducer.js`}>Reducer</Link>
            </li>
            <li>
              <Link to={`/components/callback.js`}>Callback</Link>
            </li>
            <li>
              <Link to={`/components/customHook.js`}>Custom Hook</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main-content">
        <Outlet />
      </div>
    </>
  );
}
