import React from "react";
import { createContext } from "react";

let Usercontext=createContext();

export default Usercontext;


/*
<Usercontext>  this acts as a wrapper and all the components within it have acess to it
<Card/>
<div/>
<button/>
<contact/>
<aboutus/>
<Usercontext/> we need to create a provider too in order to provide the data
*/