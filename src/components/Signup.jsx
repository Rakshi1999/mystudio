import React, { useRef, useState } from "react";
import "../Styles/Signup.css";
import Logo from "./Logo";
import axios from "axios";
import Modal from "./Modal";
import PulseLoader from "react-spinners/PulseLoader";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [validation, setValidation] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [modal, setModal] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    let check = checkValidation();
    if (validation && check) {
      setIsLoading(true);
      axios
        .post("https://musicstudio.onrender.com/signup", {
          username: userNameRef.current.value,
          email: userEmailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          setIsLoading(false);
          if (res.data.message === "success") {
            setModal(true);
          } else {
            alert(res.data.message);
            setGeneralError(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setGeneralError(err.response.data.message);
        });
    }
  }

  function checkValidation() {
    if (
      userEmailRef.current.value &&
      userNameRef.current.value &&
      passwordRef.current.value &&
      confirmPasswordRef.current.value
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleConfirm(e) {
    e.preventDefault();
    if (confirmPasswordRef.current.value !== passwordRef.current.value) {
      confirmPasswordRef.current.style.outlineColor = "red";
      setValidation(false);
    } else {
      confirmPasswordRef.current.style.outlineColor = "green";
      setValidation(true);
    }
  }

  return (
    <>
      {modal && (
        <Modal
          open={modal}
          email={userEmailRef.current.value}
          setModal={setModal}
        />
      )}
      <div className="signupFormContainer">
        <div className="formContainer">
          <div className="signupLogo">{<Logo />}</div>
          <form onSubmit={handleSubmit}>
            {generalError && <p style={{ color: "red" }}>{generalError}</p>}
            <label htmlFor="userName">User Name</label>
            <input id="userName" ref={userNameRef} required />
            <label htmlFor="userEmail">Email</label>
            <input id="userEmail" type="email" ref={userEmailRef} required />
            <label htmlFor="userPassword">Password</label>
            <input
              id="userPassword"
              type="password"
              ref={passwordRef}
              required
            />
            <label htmlFor="userConfirm">Confirm Password</label>
            <input
              id="userConfirm"
              type="password"
              ref={confirmPasswordRef}
              required
              onChange={handleConfirm}
            />
            <button type="submit">
              {isLoading ? <PulseLoader size="10px" /> : "SignUp"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
