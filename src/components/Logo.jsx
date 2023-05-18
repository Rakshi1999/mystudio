import React, { useContext } from "react";
import { LoginContext } from "../App";

function Logo(props) {
  const contextValue = useContext(LoginContext);
  return (
    <div className="logo">
      <div className="logo-bars">
        <span
          className={
            !contextValue.isPlaying ? `bar first playFirst` : `bar first`
          }
        >
          s
        </span>
        <span className="bar"></span>
        <span
          className={
            !contextValue.isPlaying ? `bar middle playMiddle` : `bar middle`
          }
        ></span>
        <span className="bar"></span>
        <span
          className={!contextValue.isPlaying ? `bar last playLast` : `bar last`}
        >
          s
        </span>
      </div>
      <div className="logo-title">Music Studio</div>
    </div>
  );
}

export default Logo;
