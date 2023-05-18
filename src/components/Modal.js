import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import { LoginContext } from "../App";
import PulseLoader from "react-spinners/PulseLoader";

function Modal(props) {
  const contextValue = useContext(LoginContext);
  const navigate = useNavigate();
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const otpRef = useRef();
  async function handleVerify() {
    setIsLoadingModal(true);
    axios
      .post("https://musicstudio.onrender.com/emailverify", {
        email: props.email,
        otp: otpRef.current.value,
      })
      .then((res) => {
        // console.log(res);
        setIsLoadingModal(false);
        navigate("/");
        contextValue.setUserName(res.data.username);
        contextValue.setUserLogin(true);
        localStorage.setItem("token", res.data.token);
      })
      .catch((e) => {
        alert(e.response.data.message);
        setIsLoadingModal(false);
      });
  }

  if (!props.open) return null;

  return ReactDOM.createPortal(
    <div className="modalContainer">
      <div className="container">
        <h2 className="modal-title">MUSIC STUDIO</h2>
        <fieldset
          className="modalContent"
          style={{ border: "2px solid white" }}
        >
          <legend>OTP Verification</legend>
          <label>Enter 6 digits OTP sent to your registered email:</label>
          <input type="number" max="6" required ref={otpRef} />
        </fieldset>
        <p className="modal-title">Kindly check your spam emails too.</p>
        <button onClick={handleVerify}>
          {isLoadingModal ? <PulseLoader size="5px" color="white" /> : "Verify"}
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
