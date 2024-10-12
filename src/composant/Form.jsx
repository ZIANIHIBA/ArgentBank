import "../style/main.css";
import { useState } from "react";


export default function Form() { 
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[remember,setRemember]=useState(false)
  const handelSubmit=(e)=>{
    e.preventDefault();
  }
    return( 
<form onSubmit={handelSubmit}>
<div className="input-wrapper">
  <label htmlFor="username">Username</label>
  <input type="text" id="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="input-wrapper">
  <label htmlFor="password">Password</label>
  <input type="password" value={password}onChange={(e)=>setPassword(e.target.value)} id="password" />
</div>
<div className="input-remember">
  <input type="checkbox" id="remember-me"  checked={remember} onChange={() => setRemember(prev => !prev)} />
  <label htmlFor="remember-me">Remember me</label>
</div>
<button className="sign-in-button">Sign In</button>
</form>)
}