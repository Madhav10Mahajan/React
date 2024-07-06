import React from 'react'
import { useState,useEffect,useCallback,useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Login() {
    let [username,setusername] = useState('');
    let [password,setpassword]=useState('');
    let {setuser}=useContext(Usercontext);
    let handlesubmit=(e)=>{

        e.preventDefault();
        setuser({username,password});
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=> setusername(e.target.value)}  placeholder='username' onClick={handlesubmit} />
        <br />
        <input type="text" value={password} onChange={(e)=> setpassword(e.target.value)}  placeholder='password' onClick={handlesubmit}/>
        <button>Submit</button>
    </div>
  )
}

export default Login