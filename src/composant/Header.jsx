   
  import "../style/main.css" 
  import {Link,NavLink } from "react-router-dom";
 import logo from "@/assets/argentBankLogo.png";
 import { useDispatch,useSelector } from "react-redux";
  import {logout} from "../reducers/login.reducer";
  //import { getProfile } from  '../actions/user.action';


// import { useEffect } from "react";


 
     function Header(){
      // const[singin,setSingin]=useState()
       const dispatch = useDispatch();
       const isLogged = useSelector(state => state.loginReducer.isLogged);
      //const token = useSelector((state) => state.login.token);
    //  const userName = useSelector((state) => state.userReducer.userName)
   const handeLgout=()=>{
  dispatch (logout());
  }
// useEffect(() => {
//   // Obtient le profil de l'utilisateur lorsqu'on dispose d'un token d'authentification.
//   try {
//       (token && !userName) && dispatch(getProfile({ token }));
//   } catch (error) {
//       console.error(error);
//       dispatch(logout());
//       // navigate
//       // Si on n'échoue dans la récupération de l'utilisateur, cela signifie peut-être que le token est expiré ou invalide. 
//       // Dans ce cas, on va rediriger vers la page de connexion. Avant cela, on va forcer une déconnexion (via handleLogout par exemple.)
//   }
// }, [token, userName])

    return (<nav  className="main-nav">
  <Link className="main-nav-logo" to="/Login">
      <img src={logo}  className="main-nav-logo-image" alt="logo of argent bank"  /> 
      </Link>
      <div>
        <NavLink  className="main-nav-item" to="/Login" onClick={handeLgout} >{ 
    isLogged?
      <><i className="fa fa-user-circle"></i>Sign out</>
      :<><i className="fa fa-user-circle"></i>Sign in</>
    }
      </NavLink>
      </div>
      </nav>)
   }
   export default Header