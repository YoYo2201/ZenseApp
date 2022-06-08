import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Alert from './Alert';
import Spinner from './Spinner';

export default function SignUp(props) {
  const [show, setStatus] = useState("visibility");
  const [confirm, setStatusConfirm] = useState("visibility");
  
  function setHeight() {
    let cont = document.getElementById("signUpID");
    cont.style.height = window.innerHeight + "px";
    cont.style.width = window.innerWidth + "px";
  }

  const PasswordHandle = () => {
    let x = document.getElementById("form1Example3");
    if (x.type === "password") {
      x.type = "text";
      setStatus("visibility_off");
    } else {
      x.type = "password";
      setStatus("visibility");
    }
  };

  const ConfirmPasswordHandle = () => {
    let x = document.getElementById("form1Example4");
    if (x.type === "password") {
      x.type = "text";
      setStatusConfirm("visibility_off");
    } else {
      x.type = "password";
      setStatusConfirm("visibility");
    }
  };

  function testfunction(){
    // props.setLoad(true);
    props.alertFunc('success', 'OTP Sent Successfully!!!');
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
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  class="form-control"
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example1">
                  Email address
                </label>
                <div className="material"><i className="email material-icons"></i></div>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example2"
                  class="form-control"
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example2">
                  User name
                </label>
                <div className="material"><i className="username material-icons"></i></div>
              </div>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example3"
                  class="form-control"
                  autoComplete="new-password"
                  minLength={8}
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example3">
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
                  id="form1Example4"
                  class="form-control"
                  autoComplete="new-password"
                  minLength={8}
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example4">
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
            <button
                type="button"
                class="btn btn-primary btn-block"
                id="SignUpButton"
                onClick={testfunction}
              >
                Test Button
              </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
