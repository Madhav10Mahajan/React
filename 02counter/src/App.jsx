import { useState } from "react"; // use state hook used for ui updation and state mgmt
// returns 2 values in an array, varibale and fnct controling that variable
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;
  let [counter, setcounter] = useState(15); // use state hook used to sync state mgmt and ui updation
  // returns 2 values in from of an array, first is variable and second in the function responsible for
  // updation of the variable
  function addvalue() {
    // console.log("add value ", Math.round(Math.random() * 10 + 1));
    if (counter + 1 > 20) {
      alert("you cant exceed the value more than 20");
    } else {
      counter++;
      setcounter(counter);
    }
    console.log(counter);
  }
  function removevalue() {
    // console.log("remove value ", Math.round(Math.random() * 10 + 1));
    if (counter - 1 < 0) {
      alert("youn cant go negative");
    } else {
      counter--;
      setcounter(counter);
    }
    console.log(counter);
  }
  return (
    <>
      <h1 id="fheading" style={{ color: "aliceblue" }}>
        chai aur react {counter}
      </h1>
      <h2 id="sheading" style={{ color: "aliceblue" }}>
        counter value: {counter}
      </h2>
      <button id="add" onClick={addvalue}>
        Add Value {counter}
      </button>
      <br />
      <br />
      <button id="remove" onClick={removevalue}>
        Remove Value {counter}
      </button>
    </>
  );
}

export default App;
