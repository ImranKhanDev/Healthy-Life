import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Login = () => {
  const [loginData, setLoginData] = useState();
  const { user, authError, loginUser, signInWithGoogle } = useAuth();
  console.log(user);
  let navigate = useNavigate();
  // let location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(newLoginData);
  };
  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password);
    navigate("/home");

    e.preventDefault();
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
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
              {user.email && <Alert variant="success">Sir ! You are in.</Alert>}
              {/* {authError && <Alert variant="danger">{authError} </Alert>} */}
              <Button variant="primary" type="submit" onClick={handleLogin}>
                Submit
              </Button>
            </Form>
            <p>
              <Link to="/register"> Are you a new user ? Register first.</Link>
            </p>

            <Button
              variant="primary"
              className="text-center"
              type="submit"
              onClick={handleGoogleLogin}
            >
              Login With Google
            </Button>
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
