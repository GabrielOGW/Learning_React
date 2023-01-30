export default function Root() {
  return (
    <>
      <div id="navbar">
        <h1>React Hooks</h1>
        <nav>
          <ul>
            <li>
              <a href={`./components/state.js`}>State</a>
            </li>
            <li>
              <a href={`/components/effect.js`}>Effect</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
