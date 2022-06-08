import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import "./SignIn.css";

export default function SignIn() {
  function setHeight() {
    let cont = document.getElementById("signUpID");
    cont.style.height = window.innerHeight + "px";
    cont.style.width = window.innerWidth + "px";
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
                  autocomplete="off"
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example2">
                  User name
                  <i className="username material-icons"></i>
                </label>
              </div>
              <div class="form-outline mb-4" style={{marginTop: '48px'}}>
                <input
                  type="password"
                  id="form1Example3"
                  class="form-control"
                  autocomplete="off"
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example3">
                  Password
                  <i className="password material-icons"></i>
                </label>
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
          </div>
        </div>
      </div>
    </div>
  );
}
