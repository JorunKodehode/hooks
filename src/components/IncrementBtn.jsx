import { useState, useEffect } from "react";

function IncrementBtn() {
  const [state, incrementBtn] = useState(0);

  useEffect(() => {
    document.title = "You clicked ${state} times";
  });

  console.log("This code will run on every rerender.");
  useEffect(() => {
    console.log("This render ones");
  }, []); // dependency array, emty array

  let count = 0;

  function saveBtn() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
  }
  //   let x = 12;
  //   let y = 8;
  //   let res = eval("x+y");
  //   document.write(res);

  return (
    <div className="App">
      <div>{state}</div>
      <button
        onClick={() => {
          incrementBtn(state + 1);
        }}
      >
        Increment
      </button>

      <p>You clicked {state} times.</p>
      <button onClick={() => incrementBtn(state + 1)}> Click me too </button>
      <button
        onClick={() => {
          saveBtn;
        }}
      >
        Save
      </button>
    </div>
  );
}
export default IncrementBtn;

/* 
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
      </div> */
