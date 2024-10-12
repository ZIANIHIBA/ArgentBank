//import { useSelector, useDispatch } from "react-redux";
import Form from "../composant/Form";
export default function Login() {

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
       <Form/>
      </section>
    </div>
  );
}