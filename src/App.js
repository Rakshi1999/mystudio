import Navbar from "./components/Navbar";
import Routing from "./Routing";
import '../src/Styles/App.css'
import MusicPlayer from "./components/MusicPlayer";
import React, { useState } from 'react';

import song1 from './Styles/assets/Songs/mymusic/Blue - One Love.mp3'
import song2 from './Styles/assets/Songs/mymusic/Ed Sheeran - Shape of You.mp3'
import song3 from './Styles/assets/Songs/mymusic/Gym Class Heroes - Stereo Hearts.mp3'
import song4 from './Styles/assets/Songs/mymusic/Jaymes Young - Infinity.mp3'
import song5 from './Styles/assets/Songs/mymusic/Lost Sky - Fearless pt.II.mp3'
import song6 from './Styles/assets/Songs/mymusic/Love Is Gone.mp3'
import song7 from './Styles/assets/Songs/mymusic/NEFFEX - Cold ❄️.mp3'
import song8 from './Styles/assets/Songs/mymusic/Otnicka - Peaky Blinder.mp3'
import song9 from './Styles/assets/Songs/mymusic/Replay - Iyaz.mp3'
import song10 from './Styles/assets/Songs/mymusic/Stay.mp3'


function App() {
  const songs = [{songSrc:song1,songCover:"",songName:"Blue - One Love",id:0},
  {songSrc:song2,songCover:"",songName:"Ed Sheeran - Shape of you",id:1},
  {songSrc:song3,songCover:"",songName:"Stereo Hearts",id:2},
  {songSrc:song4,songCover:"",songName:"Infinity",id:3},
  {songSrc:song5,songCover:"",songName:"Fearless",id:4},
  {songSrc:song6,songCover:"",songName:"Love is gone",id:5},
  {songSrc:song7,songCover:"",songName:"NEFFEX - Cold",id:6},
  {songSrc:song8,songCover:"",songName:"Peaky Blinder",id:7},
  {songSrc:song9,songCover:"",songName:"Replay - Iyaz",id:8},
  {songSrc:song10,songCover:"",songName:"Stay",id:9},
]
  const [current,setcurrent] = useState(songs[0]);
  const [songName,setSongName] = useState(songs[0].songName);

  console.log("App");

  return (
    <div className="app-container">
     <Navbar/>
     <MusicPlayer songSrc={current.songSrc} songName={current.songName} songId={current.id} setSong={setcurrent} collections={songs}/>
     <Routing/>
    </div>
  );
}

export default App;
