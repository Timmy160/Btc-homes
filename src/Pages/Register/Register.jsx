import React, { useEffect } from "react";
import "./Register.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../Firebase/Firebase";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // PASSWORD VALIDATION

  // const validateConfirmPassword = () => {
  //   if (password !== confirmPassword) {
  //     return "Password Mismatch";
  //   }
  // };

  // useEffect(() => {
  //   validateConfirmPassword();
  // }, [password, confirmPassword]);

  return (
    <div className="Register">
      <div className="Register_container">
        <div
          onClick={() => navigate("/Login")}
          className="Register_top_section"
        >
          <ArrowBackIosIcon className="back_to_login_icon" />
          <h1>Sign Up</h1>
        </div>
        <h2>Get Started</h2>
        <form className="form">
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> Create Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5> Confirm Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="Auth_buttons">
            <button type="submit" className="Start_Button" onClick={Register}>
              Get Started
            </button>
            <button
              onClick={() => navigate("/Login")}
              className="Login_account"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
