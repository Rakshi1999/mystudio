import React ,{useState , useEffect, useRef} from 'react';
import '../Styles/Player.css';
import { AiFillPlayCircle , AiFillPauseCircle,AiOutlineForward,AiOutlineBackward, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";


function MusicPlayer(props) {
    
    const{
        songSrc,
        songName,
        setSong,
        collections,
        songId,
    }=props;

    // console.log(songSrc);
    const [isPlaying , setIsPlaying] = useState(true);
    // const [currentSong,setCurrentSong] = useState(songSrc);
    const [timeUpdate,setTimeUpdate] = useState(1);
    const [songDuration, setSongDuration] = useState("0.00");
    const progressRef = useRef(0);
    const audioEle = useRef();
    function playPause(){
        setIsPlaying(!isPlaying);
    }

    useEffect(()=>{
        if(isPlaying){
            audioEle.current.pause();
        }else{
            audioEle.current.play();
        }
    })

    console.log("palyer")

    function updateTime(e){
        const duration = e.target.duration;
        const currentTime = e.target.currentTime;
        setSongDuration((duration/60).toFixed(2));
        let percentage = (currentTime/duration)*100;
        setTimeUpdate(percentage);
        if(currentTime === duration){
            setIsPlaying(true);
        }
    }

    function checkWidth(e){
        let width = progressRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        // console.log(offset);
        const divProgess = offset / width * 100;
        // console.log(divProgess);
        audioEle.current.currentTime = (divProgess/100)*audioEle.current.duration;
    }

    function handleNext(e){
        setSongDuration("0.00")
        if(songId == 9){
            setSong(collections[0]);   
        }else{
            setSong(collections[songId+1]);
        }
    }
    
    function handlePrev(e){
        setSongDuration("0.00")
        if(songId == 0){
            setSong(collections[collections.length-1]);   
        }else{
            setSong(collections[songId-1]);
        }  
    }

    return (
        <>
        <div className='player-container'>
            <div className={!isPlaying ? "coverplay" : "cover-pic"}>
             <img src="https://cdn.pixabay.com/photo/2021/03/04/20/30/microphone-6069470_960_720.jpg" alt="SongCover"/>
             <span>{songName}</span>
            </div>
            <div className="player-outline">
                <div className='seekBar-outilne' onClick={checkWidth} ref={progressRef}>
                 <div className='seekbar' style={{width:`${timeUpdate}%`}}></div>
                </div>
                <div className='player-controls'>
                    <audio src={songSrc} ref={audioEle} onTimeUpdate={updateTime}/>
                 <AiOutlineStepBackward className='previous' onClick={handlePrev}/>
                 <AiOutlineBackward className='rewind'/>
                 { !isPlaying ? <AiFillPauseCircle className='playpause pause' onClick={playPause}/> :
                 <AiFillPlayCircle className='playpause play' onClick={playPause}/>}
                 <AiOutlineForward className='forward'/>
                 <AiOutlineStepForward className='mynext' onClick={handleNext}/>
                </div>
            </div>
            <div className='duration-outline'>
                {songDuration}
            </div>
        </div>
        </>
    );
}

export default MusicPlayer;