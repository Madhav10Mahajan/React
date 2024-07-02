import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  // const [count, setCount] = useState(0)

  let myobj={
    username: 'madhav1010',
    password: 'letmetwist',
    age:10,
  }
  let myarr=[1,2,3,4,5];

  return (
    <>
      <h1 className="bg-green-600 text-black p-5 rounded-xl">Tailwind Test</h1>
      <Card channel='chai aur code' obj={myobj} myarr={myarr} buttontext='view me'/>
      <Card channel='madhav mahajan'></Card>
    </>
  );
}

export default App;
