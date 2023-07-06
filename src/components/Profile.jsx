import React, { useContext, useEffect, useRef, useState } from "react";
import "../Styles/Profile.css";
import { FaUserEdit } from "react-icons/fa";
import axios from "axios";
import { LoginContext } from "../App";
import PulseLoader from "react-spinners/PulseLoader";

function Profile(props) {
  const [profilePic, setProfilePic] = useState(
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
  );
  const contextValue = useContext(LoginContext);

  const profileRef = useRef();

  const [userData, setUserData] = useState({ language: [], artists: [] });
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    const headers = { Authorization: localStorage.getItem("token") };
    const body = {
      userData,
      dp: profilePic,
    };
    axios
      .post("https://musicstudio.onrender.com/profile", body, { headers })
      .then((data) => {
        console.log(data);
        alert(data.data.message);
        setShow(true);
        setLoader(false);
      })
      .catch((data) => {
        // console.log(data);
        setLoader(false);
        alert(data.response.data.message);
      });
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const headers = { Authorization: localStorage.getItem("token") };
      axios
        .get("https://musicstudio.onrender.com/profile", { headers })
        .then((data) => {
          console.log(data.data.userData.language);
          if (data.data.userData.language.length !== 0) {
            setProfilePic(data.data.dp);
            setUserData(data.data.userData);
            setShow(true);
            setLoader(false);
          } else {
            setShow(false);
            setLoader(false);
          }
        })
        .catch((e) => console.log(e));
    }
  }, []);

  async function setPic(val) {
    const headers = { Authorization: localStorage.getItem("token") };
    axios
      .post(
        "https://musicstudio.onrender.com/profilepic",
        { dp: val },
        { headers }
      )
      .then((data) => {
        // console.log(data);
        // alert()
      })
      .catch((e) => console.log(e));
  }

  function handleFileChange(e) {
    let reaader = new FileReader();
    reaader.readAsDataURL(e.target.files[0]);
    reaader.onload = () => {
      setProfilePic(reaader.result);
      setPic(reaader.result);
    };
    reaader.onerror = (err) => {
      // console.log(err);
      alert("Something went wrong lease try again");
    };
  }

  function handleCheckLanguages(e) {
    if (userData.language.includes(e.target.value)) {
      let filtered = userData.language.filter((ele) => ele !== e.target.value);
      setUserData({ ...userData, language: [...filtered] });
    } else {
      setUserData({
        ...userData,
        language: [...userData.language, e.target.value],
      });
    }
  }

  function handleCheckArtist(e) {
    if (userData.artists.includes(e.target.value)) {
      let filtered = userData.artists.filter((ele) => ele !== e.target.value);
      setUserData({ ...userData, artists: [...filtered] });
    } else {
      setUserData({
        ...userData,
        artists: [...userData.artists, e.target.value],
      });
    }
  }
  return (
    <>
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundImage:
              "linear-gradient(60deg,rgba(156, 38, 247, 0.873),rgba(68, 251, 205, 0.873))",
          }}
        >
          <PulseLoader />{" "}
        </div>
      ) : (
        <div className="profile-container">
          <div className="profile-left">
            <div
              className="profile-image-container"
              style={{ backgroundImage: `url(${profilePic})` }}
              onClick={() => profileRef.current.click()}
            >
              <FaUserEdit className="attachment" />
              <input
                ref={profileRef}
                style={{ display: "none" }}
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <h3
              style={{
                textAlign: "center",
                margin: "1.5rem 0rem",
                fontSize: "1.5rem",
              }}
            >
              <div>{contextValue.userName}</div>
            </h3>
          </div>
          <div className="profile-right">
            {!show && (
              <>
                <h3 style={{ textAlign: "center" }}>
                  This helps us suggest you better songs
                </h3>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <legend>Bio</legend>
                    <div className="input-type">
                      <input
                        type="textbox"
                        onChange={(e) =>
                          setUserData({ ...userData, bio: e.target.value })
                        }
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Date Of Birth</legend>
                    <div className="input-type">
                      <input
                        type="date"
                        onChange={(e) =>
                          setUserData({ ...userData, dob: e.target.value })
                        }
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Gender</legend>
                    <div className="language-grid">
                      <label>Male</label>
                      <input type="radio" value="Male" name="male-female" />
                      <label>Female</label>
                      <input type="radio" value="Female" name="male-female" />
                      <label>Others</label>
                      <input type="radio" value="Others" name="male-female" />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Language</legend>
                    <div className="language-grid">
                      <label>Kannada</label>
                      <input
                        type="checkbox"
                        value="Kannada"
                        onChange={handleCheckLanguages}
                      />
                      <label>English</label>
                      <input
                        type="checkbox"
                        value="English"
                        onChange={handleCheckLanguages}
                      />
                      <label>Hindi</label>
                      <input
                        type="checkbox"
                        value="Hindi"
                        onChange={handleCheckLanguages}
                      />
                      <label>Tamil</label>
                      <input
                        type="checkbox"
                        value="Tamil"
                        onChange={handleCheckLanguages}
                      />
                      <label>Telugu</label>
                      <input
                        type="checkbox"
                        value="Telugu"
                        onChange={handleCheckLanguages}
                      />
                      <label>Malayalam</label>
                      <input
                        type="checkbox"
                        value="Malayalam"
                        onChange={handleCheckLanguages}
                      />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend>Favorite Artists</legend>
                    <div className="language-grid">
                      <label>Arijith singh</label>
                      <input
                        type="checkbox"
                        value="Arijith singh"
                        onChange={handleCheckArtist}
                      />
                      <label>Neha kakkar</label>
                      <input
                        type="checkbox"
                        value="Neha kakkar"
                        onChange={handleCheckArtist}
                      />
                      <label>A R Rahman</label>
                      <input
                        type="checkbox"
                        value="AR Raham"
                        onChange={handleCheckArtist}
                      />
                      <label>Sonu Nigam</label>
                      <input
                        type="checkbox"
                        value="Sonu Nigam"
                        onChange={handleCheckArtist}
                      />
                      <label>Badshah</label>
                      <input
                        type="checkbox"
                        value="Badshah"
                        onChange={handleCheckArtist}
                      />
                      <label>Alka Yagnik</label>
                      <input
                        type="checkbox"
                        value="Alka Yagnik"
                        onChange={handleCheckArtist}
                      />
                    </div>
                  </fieldset>
                  <input
                    type="submit"
                    value="Set Perference"
                    className="profile-submit"
                  />
                </form>
              </>
            )}
            {show && (
              <>
                <div className="user-profile">
                  <div className="profile-bio">
                    <h3>Bio</h3>
                    <p>{userData.bio || "I Love Music"}</p>
                  </div>
                  <hr />
                  <div>
                    <h3>Languages</h3>
                    <ul>
                      {userData.language.map((ele, i) => {
                        return <li key={i}>{ele}</li>;
                      })}
                    </ul>
                  </div>
                  <hr />
                  <div>
                    <h3>Artits</h3>
                    <ul>
                      {userData.artists.map((ele, i) => {
                        return <li key={i}>{ele}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
