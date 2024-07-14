import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";

function App() {
  // const [count, setCount] = useState(0)
  // console.log(import.meta.env.VITE_APPWRITE_URL );
  let [loading, setloading] = useState(true);
  let dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch((login({userData})));
        }
      })
      .finally();
  }, []);

  return (
    <>
      <h1>Blog app with appwrite</h1>
    </>
  );
}

export default App;
