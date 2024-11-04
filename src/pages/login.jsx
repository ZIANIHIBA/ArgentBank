//import { useSelector, useDispatch } from "react-redux";
import Form from "@/composant/Form";
import "@/style/main.css";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

    const isLogged = useSelector(state => state.loginReducer.isLogged);

    useEffect(() => {
        isLogged && navigate('/user');
      }, [isLogged, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
       <Form/>
      </section>
    </main>
  );
}