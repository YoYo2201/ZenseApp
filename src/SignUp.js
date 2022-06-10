import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Alert from './Alert';
import Spinner from './Spinner';
import data from './URL.json';

export default function SignUp(props) {
  const [show, setStatus] = useState("visibility");
  const [confirm, setStatusConfirm] = useState("visibility");
  const [disable, setDisable] = useState(false);
  const URL = data.URL;
  
  function setHeight() {
    let cont = document.getElementById("signUpID");
    cont.style.height = window.innerHeight + "px";
    cont.style.width = window.innerWidth + "px";
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

  const ConfirmPasswordHandle = () => {
    let x = document.getElementById("confirm-password");
    if (x.type === "password") {
      x.type = "text";
      setStatusConfirm("visibility_off");
    } else {
      x.type = "password";
      setStatusConfirm("visibility");
    }
  };

  async function SignUp(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if(password !== confirmPassword)
    {
      props.alertFunc('danger', 'Passwords do not match!');
    }
    else{
      setDisable(true);
      const PORT = process.env.PORT || 5000;
      let url = process.env.NODE_ENV === 'production' ? 'https://firechat2201.herokuapp.com/api/sendOTP' : `${URL}:${PORT}/api/signUp`
      props.setLoad(true);
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password
        }),
      }).then((res) => res.json());

      props.setLoad(false);
      if (result.status === "ok") {
        props.alertFunc('success', 'Registration Successful!!!');
        props.navigate('/sign-in', true);
      } else if(result.status === "Exists"){
        setDisable(false);
        props.alertFunc('danger', "Username Already Exists!!!");
      }
      else
      {
        setDisable(false);
        props.alertFunc('danger', "Some Error Occurred! Try Again");
      }
    }
  }

  function Submit() {
    const form = document.getElementById('reg-form')
		form.addEventListener('submit', SignUp)
  }

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
            <p id="text2">Sign up to</p>
            <p id="text3">Zense</p>
          </div>
          <div className="SignUpFormCont">
            <form id='reg-form'>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  autofocus
                  required
                />
                <label class="floating-label" for="email">
                  Email address
                </label>
                <div className="material"><i className="email material-icons"></i></div>
              </div>
              <div class="form-outline mb-4">
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
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  autoComplete="new-password"
                  minLength={8}
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
                  </button></div>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="confirm-password"
                  class="form-control"
                  autoComplete="new-password"
                  minLength={8}
                  autofocus
                  required
                />
                <label class="floating-label" for="confirm-password">
                  Confirm Password
                </label>
                <div className="material">
                <button
                    type="button"
                    className="show-password"
                    onClick={ConfirmPasswordHandle}
                  >
                    <i className="show-password material-icons">{confirm}</i>
                  </button></div>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-block"
                id="SignUpButton"
                disabled={disable}
                onClick={Submit}
              >
                Sign Up
              </button>
              <div class="col">
                <p id="text4">Already have an Account?</p>
                <Link to="/sign-in" class="signIn-visit" replace="true">
                  Login
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
