import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ModalSample from "./ModalSample";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      <>
    <div className="backgroundDiv">
        <div className="formStyle"> 
       
      <div className="Login">
      
        <Form onSubmit={handleSubmit}>
        <div className="loginfrominput">
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </Form.Group>
          </div>
          
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          
          <Button   class='btn btn-primary' type="button" className="bbbb" disabled={!validateForm()} >Sign in</Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4>don't have account? register here...</h4>
          
          <Link to="/loginForm">
          <Button block size="lg" type="submit" class='btn btn-primary btn-block' disabled={!validateForm()}>
            Register
          </Button>
          </Link>
        </Form>
       
        
      </div>
      
    </div>
    </div>
    </>
  );
}
