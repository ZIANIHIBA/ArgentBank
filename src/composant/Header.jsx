   
  import "../style/main.css" 
  import {Link,NavLink } from "react-router-dom";
 import logo from "@/assets/argentBankLogo.png";

     function Header(){
    return (<nav  className="main-nav">
  <Link className="main-nav-logo" to="/">
      <img src={logo}  className="main-nav-logo-image" alt="logo of argent bank"/> 
      </Link>
      <div>
        <NavLink className="main-nav-item">
      <i className="fa fa-user-circle"></i>
       sing in 
      </NavLink>
      </div>
      </nav>)
   }
   export default Header