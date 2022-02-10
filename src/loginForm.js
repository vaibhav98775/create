import logo from "./logo.svg";
import "./App.css";
import Logindetail from "./Logindetail";
import React, { useState } from "react";
import validator from "validator";
import axios, { Axios } from "axios";
import "reactjs-popup/dist/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTable } from "react-table";
import Crud from "./Crud";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Cccc from "./Cccc";

const LoginForm = () => {
  {
    const [emailError, setEmailError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [user, setUser] = useState({});

    const handle = () => {
      localStorage.setItem("Fname", fname);
      localStorage.setItem("Lname", lname);
      localStorage.setItem("Name", name);
      localStorage.setItem("Password", pwd);
    };

    const validateEmail = (e) => {
      var email = e.target.value;
      setEmailError.email = "Required";

      if (validator.isEmail(email)) {
        setEmailError();
      } else {
        setEmailError("Enter Valid Email!");
      }
    };
    const validate = (value) => {
      if (
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        setErrorMessage();
      } else {
        setErrorMessage("Is Not Strong Password");
      }
    };

    return (
      <>
      
        <div className="backgroundDiv">
          <div className="formStyle">
            {
              <div className="row">
                <div class="col-lg-12 col-sm-12">
                  <form action="">
                    <div className="loginfrominput">
                      <label for="usr">Email ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userEmail"
                        value={name}
                        onChange={(e) => {
                          validateEmail(e);
                          setName(e.target.value);
                        }}
                        required
                      ></input>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {emailError}
                      </span>
                    </div>

                    <div className="loginfrominput">
                      <label for="pwd">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        value={pwd}
                        onChange={(e) => {
                          validate(e.target.value);
                          setPwd(e.target.value);
                        }}
                      ></input>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {errorMessage}
                      </span>
                    </div>
                  </form>

                  <Link to="/Logindetail">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block"
                      onClick={handle}
                    >
                      Log in
                    </button>
                  </Link>
                  {/* <br></br>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <h4>don't have an account?</h4>
                  <Link to="/Crud">
                  <button type="button" class="btn btn-primary btn-lg">Signup here</button>
                  </Link> */}
                </div>
              </div>
            }
          </div>
        </div>
      </>
    );
  }
};
export default LoginForm;
