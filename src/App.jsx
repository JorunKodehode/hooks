import { useState } from "react";
import CreateParagraph from "./CreateParagraph";
import "./App.css";

function App() {
  const [state, incrementBtn] = useState(0);
  let saveEl = document.getElementById("save-el");
  let count = 0;

  function saveBtn() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
  }
  return (
    <>
      <div className="App">
        <div>{state}</div>
        <button
          onClick={() => {
            incrementBtn(state + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            saveBtn;
          }}
        >
          Save
        </button>
        <CreateParagraph />
      </div>

      {/* 
        // const reactStateObject = useState();
  // console.log(reactStateObject);
  // function updateCount(addThis) {
  //   setCount((oldCount) => {
  //     return oldCount + addThis;
  //   });
  // }
  // let doesNotWork = 34;
      
      <div className="App">
      <div>{state}</div>
      <button
        onClick={() => {
          setCount(state + 1);
        }}
      >
        Click Me
      </button>

        <button
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
        </button>
      </div> */}
    </>
  );
}

export default App;
