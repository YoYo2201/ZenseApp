import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
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
                  autocomplete="off"
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example1">
                  Email address
                  <i className="email material-icons"></i>
                </label>
              </div>
              <div class="form-outline mb-4">
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
              <div class="form-outline mb-4">
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
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example4"
                  class="form-control"
                  autocomplete="off"
                  autofocus
                  required
                />
                <label class="floating-label" for="form1Example4">
                  Confirm Password
                </label>
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
          </div>
        </div>
      </div>
    </div>
  );
}
