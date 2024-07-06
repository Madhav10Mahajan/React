import { useState } from "react";
import "./App.css";
import Usercontextprovider from "./Context/Usercontextprovider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
      <h1>chai aur context</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  );
}

export default App;
