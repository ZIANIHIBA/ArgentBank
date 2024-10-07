   
  import "../style/main.css" 
  import {Link,NavLink } from "react-router-dom";
 import logo from "@/assets/argentBankLogo.png";
 //import { useSelector } from "react-redux";
//  import { useState } from "react";


 
     function Header(){
      // const[singin,setSingin]=useState()
    return (<nav  className="main-nav">
  <Link className="main-nav-logo" to="/Login">
      <img src={logo}  className="main-nav-logo-image" alt="logo of argent bank"/> 
      </Link>
      <div>
        <NavLink  className="main-nav-item" to="/Login">
      <i className="fa fa-user-circle"></i>
       sing in 
      </NavLink>
      </div>
      </nav>)
   }
   export default Header