import React from "react";
import "./Login.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../Firebase/Firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="Login_container">
        <div onClick={() => navigate("/")} className="Login_top_section">
          <ArrowBackIosIcon className="back_to_home_icon" />
          <h1>Sign In</h1>
        </div>
        <h2>Welcome back!</h2>
        <form className="form">
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="Auth_buttons">
            <button type="submit" className="login_Button" onClick={SignIn}>
              Login
            </button>
            <button
              onClick={() => navigate("/Register")}
              className="create_account "
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
