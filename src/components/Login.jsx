import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "../Styles/Login.css";
import Logo from "./Logo";
import axios from "axios";
import { LoginContext } from "../App";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "./Modal";

export function setJwt(token) {
  localStorage.setItem("token", token);
}

function Login({ setUser }) {
  const contestValue = useContext(LoginContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [generalError, setGeneralError] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [verifyEmailOpen, setVerifyEmailOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // .post("https://musicstudio.onrender.com/login", {

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoginLoading(true);
    axios
      .post("https://musicstudio.onrender.com/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "otp") {
          setVerifyEmailOpen(true);
          setUserEmail(emailRef.current.value);
        } else {
          setJwt(res.data.jwt);
          setUser(true);
          contestValue.setUserName(res.data.username);
          navigate("/");
          setIsLoginLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "otp") {
          setVerifyEmailOpen(true);
          setUserEmail(emailRef.current.value);
          setIsLoginLoading(false);
        } else {
          setIsLoginLoading(false);
          setGeneralError(err.response.data.message);
        }
      });
  }
  const styleObj = {
    color: "red",
  };

  return (
    <>
      <div className="loginBody">
        <Modal open={verifyEmailOpen} email={userEmail} />
        <div className="loginOutline">
          <div className="loginLogo">{<Logo />}</div>
          <form onSubmit={handleSubmit}>
            {generalError && <p style={styleObj}>{generalError}</p>}
            <label htmlFor="userEmail">Email</label>
            <input
              inputMode="Android"
              type="email"
              id="userEmail"
              required
              ref={emailRef}
            />
            {/* {emailError && <p style={styleObj}>{emailError}</p>} */}
            <label htmlFor="userEmail">Password</label>
            <input
              type="password"
              id="userPassword"
              required
              ref={passwordRef}
            />
            {/* {passwrodError && <p style={styleObj}>{passwrodError}</p>} */}
            <button type="submit" className="btn">
              {isLoginLoading ? <PulseLoader /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
