import "../style/main.css";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/login.reducer";
import { getProfile } from "../actions/user.action";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.loginReducer.isLogged);
  const token = useSelector((state) => state.loginReducer.token);
  const userName = useSelector((state) => state.userReducer.userName);
  const handeLgout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    try {
      token && !userName && dispatch(getProfile({ token }));
    } catch (error) {
      console.error(error);
      dispatch(logout());
    }
  }, [token, userName]);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/Login">
        <img
          src={logo}
          className="main-nav-logo-image"
          alt="logo of argent bank"
        />
      </Link>
      <div>
        <NavLink className="main-nav-item" to="/Login" onClick={handeLgout}>
          {isLogged ? (
            <>
              {userName} <i className="fa fa-sign-out"></i>Sign Out
            </>
          ) : (
            <>
              <i className="fa fa-user-circle"></i>Sign-in
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
export default Header;
