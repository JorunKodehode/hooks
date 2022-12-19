import { useState } from "react";
import "./App.css";

function App() {
  // const reactStateObject = useState();
  // console.log(reactStateObject);
  // let doesNotWork = 34;

  const [state, setCount] = useState(0);

  function updateCount(addThis) {
    setCount((oldCount) => {
      return oldCount + addThis;
    });
  }

  return (
    <div className="App">
      <div>{state}</div>
      <button
        onClick={() => {
          setCount(state + 1);
        }}
      >
        Click Me
      </button>
      {/* <button
        onclick={() => {
          setState(state + 45);
        }}
      >
        Click Me
      </button>

      <button
        onclick={() => {
          doesNotWork = doesNotWork + 30;
        }}
      >
        Click Me
      </button> */}
    </div>
  );
}

export default App;
