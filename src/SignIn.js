import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import "./SignIn.css";
import Alert from './Alert';
import Spinner from './Spinner';
import data from './URL.json';

export default function SignIn(props) {
  const [show, setStatus] = useState("visibility");
  const [disable, setDisable] = useState(false);
  const URL = data.URL;

  function setHeight() {
    let cont = document.getElementById("signUpID");
    cont.style.height = window.innerHeight + "px";
    cont.style.width = window.innerWidth + "px";
  }

  const authenticate = () => {
		const form = document.getElementById('reg-form')
		form.addEventListener('submit', SignIn)
	
		async function SignIn(event){
      event.preventDefault()
      setDisable(true);
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      props.setLoad(true);
      const PORT = process.env.PORT || 5000;
      let url = process.env.NODE_ENV === 'production' ? 'https://firechat2201.herokuapp.com/api/login' : `${URL}:${PORT}/api/login`
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        }),
      }).then((res) => res.json());

      props.setLoad(false);
      if (result.status === "ok") {
        props.alertFunc('success', 'Logged In Successfully!!!');
        props.setDataFunc({username: username});
				props.navigate('/chat', true);
      } else {
        setDisable(false);
        props.alertFunc("danger", result.error);
      }
    }
  }

  const PasswordHandle = () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      setStatus("visibility_off");
    } else {
      x.type = "password";
      setStatus("visibility");
    }
  };

  window.addEventListener("resize", setHeight);
  return (
    <div
      className="signUp"
      id="signUpID"
      style={{
        width: window.innerWidth + "px",
        height: window.innerHeight + "px",
      }}
    >
      {props.alert !== null ? <Alert alert={props.alert}/> : undefined}
      {props.loading && <Spinner/>}
      <div id="SpinnerClass" style={props.loading ? {filter: 'blur(2px)'}: undefined}>
      <p id="login">Login</p>
      <div id="line" style={{ width: window.innerWidth - 100 + "px" }}></div>
      <div className="signUpForm">
        <div className="signUpCont">
          <p id="text1">Welcome!</p>
          <div id="box1">
            <p id="text2">Sign in to</p>
            <p id="text3">Zense</p>
          </div>
          <div className="SignUpFormCont">
            <form id='reg-form'>
              <div class="form-outline mb-4" style={{marginTop: '48px'}}>
                <input
                  type="text"
                  id="username"
                  class="form-control"                  
                  autofocus
                  required
                />
                <label class="floating-label" for="username">
                  User name
                </label>
                <div className="material"><i className="username material-icons"></i></div>
              </div>
              <div class="form-outline mb-4" style={{marginTop: '48px'}}>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  autofocus
                  required
                />
                <label class="floating-label" for="password">
                  Password
                </label>
                <div className="material">
                <button
                    type="button"
                    className="show-password"
                    onClick={PasswordHandle}
                  >
                    <i className="show-password material-icons">{show}</i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-block"
                id="SignUpButton"
                disabled={disable}
                onClick={authenticate}
              >
                Login
              </button>
              <div class="col">
                <p id="text4">Don't have an Account?</p>
                <Link to="/" class="signIn-visit" replace="true">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
