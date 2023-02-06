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
            <li>
              <a href={`/components/memo.js`}>Memo</a>
            </li>
            <li>
              <a href={`/components/ref.js`}>Ref</a>
            </li>
            <li>
              <a href={`/components/context.js`}>Context</a>
            </li>
            <li>
              <a href={`/components/reducer.js`}>Reducer</a>
            </li>
            <li>
              <a href={`/components/callback.js`}>Reducer</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
