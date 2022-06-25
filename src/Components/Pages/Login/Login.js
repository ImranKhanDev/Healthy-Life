import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(newLoginData);
  };
  const handleLogin = (e) => {
    alert("user logged in");
    e.preventDefault();
  };
  return (
    <div className="login">
      <h1>Welcome to Healthylife</h1>
      <p>Please Login First</p>
      <div className="container">
        <div className="row">
          <div className="col text-start">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p>
              <Link to="/register"> Are you a new user ? Register first.</Link>
            </p>
          </div>
          <div className="col">
            <img
              src="./login.png"
              alt="login-image"
              style={{ height: 400, width: 420 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
