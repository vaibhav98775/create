import "./App.css";
import Logindetail from "./Logindetail";
import LoginForm from "./loginForm";
import validator from "validator";
import "reactjs-popup/dist/index.css";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Register from "./Register";
import TableEditablePage from "./BasicTable";
import BasicTable from "./BasicTable";
import Login from "./Login";
import ModalSample from "./ModalSample";
import TableDemo from "./TableDemo";
import TableData from "./table";
import Crud from "./Crud";
import DynamicTable from "./DynamicTable";
import Cccc from "./Cccc";
const App = () => {
  return (
    <>
   
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm/>}></Route>
          <Route exact path="/loginForm" element={<LoginForm />}></Route>
          <Route exact path="/Logindetail" element={<Logindetail />}></Route>
          <Route exact path="/LoginForm" element={<LoginForm />}></Route>
          <Route exact path="/Cccc" element={<Crud/>}></Route>

        </Routes>
      </Router>
    </>
  );
};
export default App;
