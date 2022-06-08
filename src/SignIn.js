import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import "./SignIn.css";
import Alert from './Alert';
import Spinner from './Spinner';

export default function SignIn(props) {
  const [show, setStatus] = useState("visibility");

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

  function testfunction(){
    props.setLoad(true);
    // props.alertFunc('success', 'OTP Sent Successfully!!!');
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
            <p id="text2">Sign in to</p>
            <p id="text3">Zense</p>
          </div>
          <div className="SignUpFormCont">
            <form>
              <div class="form-outline mb-4" style={{marginTop: '48px'}}>
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
              <div class="form-outline mb-4" style={{marginTop: '48px'}}>
                <input
                  type="password"
                  id="form1Example3"
                  class="form-control"
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
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-block"
                id="SignUpButton"
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
