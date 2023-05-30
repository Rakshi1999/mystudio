import Navbar from "./components/Navbar";
import Routing from "./Routing";
import '../src/Styles/App.css'
import MusicPlayer from "./components/MusicPlayer";
import React, { createContext, useEffect, useState } from "react";

import song1 from "./Styles/assets/Songs/mymusic/Blue - One Love.mp3";
import song2 from "./Styles/assets/Songs/mymusic/Ed Sheeran - Shape of You.mp3";
import song3 from "./Styles/assets/Songs/mymusic/Gym Class Heroes - Stereo Hearts.mp3";
import song4 from "./Styles/assets/Songs/mymusic/Jaymes Young - Infinity.mp3";
import song5 from "./Styles/assets/Songs/mymusic/Lost Sky - Fearless pt.II.mp3";
import song6 from "./Styles/assets/Songs/mymusic/Love Is Gone.mp3";
import song7 from "./Styles/assets/Songs/mymusic/NEFFEX - Cold ❄️.mp3";
import song8 from "./Styles/assets/Songs/mymusic/Otnicka - Peaky Blinder.mp3";
import song9 from "./Styles/assets/Songs/mymusic/Replay - Iyaz.mp3";
import song10 from "./Styles/assets/Songs/mymusic/Stay.mp3";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

export const LoginContext = createContext();

function App() {
  const songs = [
    {
      songSrc: song1,
      songCover:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/BlueOnelove.jpg/220px-BlueOnelove.jpg",
      songName: "Blue - One Love",
      id: 0,
    },
    {
      songSrc: song2,
      songCover:
        "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      songName: "Ed Sheeran - Shape of you",
      id: 1,
    },
    {
      songSrc: song3,
      songCover:
        "https://upload.wikimedia.org/wikipedia/en/1/17/Gym_Class_Heroes_-_Stereo_Hearts.jpg",
      songName: "Stereo Hearts",
      id: 2,
    },
    {
      songSrc: song4,
      songCover:
        "https://i.pinimg.com/736x/b5/00/b9/b500b9a782afecf8bb38163485a376a7.jpg",
      songName: "Infinity",
      id: 3,
    },
    {
      songSrc: song5,
      songCover:
        "https://t3.ftcdn.net/jpg/04/36/72/44/360_F_436724455_leQOPbf4KUxPXhZUJ2kHAznHo2Qjzyba.jpg",
      songName: "Fearless",
      id: 4,
    },
    { songSrc: song6, songCover: "", songName: "Love is gone", id: 5 },
    {
      songSrc: song7,
      songCover:
        "https://i1.sndcdn.com/avatars-000208034087-ot1xna-t500x500.jpg",
      songName: "NEFFEX - Cold",
      id: 6,
    },
    {
      songSrc: song8,
      songCover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EurEfe7HQ9tHIBPxbmlYYtRw5FCeSG1nvINcXAOngVA4i31kFgsF1J2o4Sim1oeOpyA&usqp=CAU",
      songName: "Peaky Blinder",
      id: 7,
    },
    { songSrc: song9, songCover: "", songName: "Replay - Iyaz", id: 8 },
    { songSrc: song10, songCover: "", songName: "Stay", id: 9 },
  ];
  let random = Math.floor(Math.random() * 10);
  const [current, setcurrent] = useState(songs[random]);
  const [colorIndex, setColorIndex] = useState(random);
  const [useLogin, setUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoading(true);
      const headers = { Authorization: localStorage.getItem("token") };
      // console.log(headers);
      axios
        .get("https://musicstudio.onrender.com/verify", { headers })
        .then((res) => {
          // console.log(res);
          setUserName(res.data.username);
          setUserLogin(true);
          setLoading(false);
        })
        .catch((err) => {
          // console.log(err);
          setLoading(false);
          alert(err.response.data.message);
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://musicstudio.onrender.com/getData")
      .then((data) => {
        console.log("end point working!!");
      })
      .catch((err) => {
        console.log("error fetching the data");
      });
  }, []);

  useEffect(() => {
    let id = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <LoginContext.Provider
      value={{
        useLogin,
        setUserLogin,
        setUserName,
        userName,
        isPlaying,
        setIsPlaying,
        colorIndex,
        setColorIndex,
      }}
    >
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            placeItems: "center",
            backgroundColor: "grey",
          }}
        >
          <HashLoader color="white" size="100px" />
        </div>
      ) : (
        <div className="app-container">
          <Navbar user={useLogin} userName={userName} />
          <MusicPlayer
            songSrc={current ? current.songSrc : null}
            songCover={current ? current.songCover : null}
            songName={current ? current.songName : null}
            songId={current ? current.id : null}
            setSong={setcurrent}
            collections={songs}
          />
          <Routing
            collections={songs}
            setSong={setcurrent}
            setUser={setUserLogin}
            user={useLogin}
          />
        </div>
      )}
    </LoginContext.Provider>
  );
}

export default App;
