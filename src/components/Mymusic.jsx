import React, { useContext } from "react";
import "../Styles/Mymusic.css";
import player1 from "../Styles/assets/mymusic.png";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillHeart,
} from "react-icons/ai";
import { LoginContext } from "../App";

function Mymusic({ collections, setSong }) {
  const contextValue = useContext(LoginContext);
  const colorIndex = contextValue.colorIndex;
  const setColorIndex = contextValue.setColorIndex;

  function handleChange(e) {
    setSong(collections[e.target.id]);
    contextValue.setIsPlaying(false);
    setColorIndex(e.target.id);
  }
  let defaultCover =
    "https://cdn.pixabay.com/photo/2021/03/04/20/30/microphone-6069470_960_720.jpg";
  return (
    <>
      <div className="outter-container">
        <div className="leftSection">
          <div className="playerContainer">
            <img src={player1} alt="player logo" className="image" />
          </div>
          <div
            style={{
              letterSpacing: "0.1rem",
              display: "flex",
              justifyContent: "center",
              marginTop: "0.6rem",
            }}
          >
            <p style={{ display: "flex" }}>
              Made With
              {
                <span style={{ marginLeft: "0.2rem", color: "red" }}>
                  <AiFillHeart />
                </span>
              }
            </p>
          </div>
        </div>
        <div className="rightSection">
          <h3>My Musics</h3>
          <div className="musicContainer">
            <ul>
              {/* <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li> */}
              {collections.map((obj, i) => {
                return (
                  <li
                    key={i}
                    id={i}
                    onClick={handleChange}
                    style={{
                      backgroundColor:
                        i === Number(colorIndex)
                          ? "rgb(214, 226, 226)"
                          : "aliceblue",
                      transform: i === Number(colorIndex) ? "scale(1.03)" : "",
                    }}
                  >
                    <div className="coverImg">
                      {/* <img
                        src={obj.songCover ? obj.songCover : defaultCover}
                        alt="cover"
                      /> */}
                      <div
                        style={{
                          width: "35px",
                          height: "100%",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundImage: `url(${
                            obj.songCover || defaultCover
                          })`,
                        }}
                      ></div>
                    </div>
                    <div id={i}>{obj.songName}</div>
                    <div
                      id={i}
                      className={i === Number(colorIndex) ? "play" : "pause"}
                    >
                      {i === Number(colorIndex) ? (
                        <AiFillPauseCircle />
                      ) : (
                        <AiFillPlayCircle />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mymusic;
