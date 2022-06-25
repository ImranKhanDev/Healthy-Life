import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const [registerData, setRegisterData] = useState();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    // console.log(newRegisterData);
  };
  const handleRegister = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your information is incorrect.Please check again");
      return;
    }
    registerUser(registerData.email, registerData.password);
    alert("Your registration is successful");
    navigate("/login");

    e.preventDefault();
  };
  return (
    <div className="register">
      <h1>Welcome to Healthylife</h1>
      <p>Please Register First</p>
      <div className="container">
        <div className="row">
          <div className="col text-start">
           <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="name"
                  name="name"
                  placeholder="Your name"
                />
                <br />
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={handleOnChange}
                  name="email"
                  placeholder="Your Email"
                />
                <br />
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
              <Form.Group
                className="mb-3"
                name="password2"
                controlId="formBasicPassword"
              >
                <Form.Label>Retype Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password2"
                  onChange={handleOnChange}
                  placeholder="Retype your Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="text-center">
                Register
              </Button>
            </Form>
       

            <p>
              <Link to="/login"> Are you are a member ? Login first.</Link>
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

export default Register;
