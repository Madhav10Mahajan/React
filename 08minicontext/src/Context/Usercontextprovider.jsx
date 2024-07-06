import React from "react";
import Usercontext from "./Usercontext";
import { useState } from "react";

function Usercontextprovider({ children }) {
  let [user, setuser] = useState(null);
  return (
    <Usercontext.Provider value={{ user, setuser }}>
      {children}
    </Usercontext.Provider>
  );

}

export default Usercontextprovider;
