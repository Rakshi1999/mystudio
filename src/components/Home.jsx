import React,{useRef} from 'react';
import '../Styles/Home.css'

import pic1 from '../Styles/assets/carsorel/1.jpeg'
import pic2 from '../Styles/assets/carsorel/2.jpeg'
import pic3 from '../Styles/assets/carsorel/3.jpeg'
import pic4 from '../Styles/assets/carsorel/4.jpeg'
import pic5 from '../Styles/assets/carsorel/5.jpeg'
import pic6 from '../Styles/assets/carsorel/6.jpeg'

import trending3 from '../Styles/assets/Trending pic/3.jpeg'
import trending1 from '../Styles/assets/Trending pic/1.jpeg'
import trending2 from '../Styles/assets/Trending pic/2.jpeg'
import trending4 from '../Styles/assets/Trending pic/4.jpeg'
import trending5 from '../Styles/assets/Trending pic/5.jpeg'
import trending6 from '../Styles/assets/Trending pic/6.jpeg'
import trending7 from '../Styles/assets/Trending pic/7.jpeg'
import trending8 from '../Styles/assets/Trending pic/8.jpeg'

import artist1 from '../Styles/assets/Artist/1.jpeg'
import artist2 from '../Styles/assets/Artist/4.jpeg'
import artist3 from '../Styles/assets/Artist/5.jpeg'
import artist4 from '../Styles/assets/Artist/3.jpeg'
import artist5 from '../Styles/assets/Artist/2.jpeg'
import artist6 from '../Styles/assets/Artist/6.jpeg'
import artist7 from '../Styles/assets/Artist/7.jpeg'
import artist8 from '../Styles/assets/Artist/8.jpeg'

import { NavLink, useNavigate } from "react-router-dom";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
};
const container1 = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const item1 = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Home = () => {
  const navigate = useNavigate();
  const imgRef = useRef();
  const carouselRef = useRef();

  const trendingCarouselRef = useRef();
  const trendingImageRef = React.createRef();

  const artistCarouselRef = useRef();
  const artistImageRef = React.createRef();

  function scrollHandlerLeft() {
    carouselRef.current.scrollLeft -= imgRef.current.clientWidth;
  }

  function scrollHandlerRight() {
    carouselRef.current.scrollLeft += imgRef.current.clientWidth;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + 480;
  }

  function TrendingScrollHandlerLeft() {
    trendingCarouselRef.current.scrollLeft -=
      trendingImageRef.current.clientWidth;
  }

  function TrendingScrollHandlerRight() {
    trendingCarouselRef.current.scrollLeft +=
      trendingImageRef.current.clientWidth;
  }

  function artistScrollHandlerLeft() {
    artistCarouselRef.current.scrollLeft -= artistImageRef.current.clientWidth;
  }

  function artistScrollHandlerRight() {
    artistCarouselRef.current.scrollLeft += artistImageRef.current.clientWidth;
  }

  const TrendingCard = React.forwardRef((props, ref) => {
    return (
      <>
        <div className="cardHolder">
          <img src={props.src} ref={ref} alt={props.name} />
          <div>{props.name}</div>
        </div>
      </>
    );
  });

  function handleClick(e) {
    let token = localStorage.getItem("token");
    if (!token) {
      alert("Please sign up for complete access");
      navigate("/login");
      // return;
    }else{
      console.log(e.target);
      console.log(e.target.tagname);
    }
    
  }

  return (
    <>
      <div className="outline">
        <div className="left-Section"></div>
        <div className="right-Section">
          <div className="homeNav">
            <ul>
              <li>
                <NavLink to="/mymusic">All</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Trending Songs</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">New Songs</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Old Songs</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Moods & Genres</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Album</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Radio</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Podcast</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">My Music</NavLink>
              </li>
            </ul>
          </div>
          <motion.ul
            className="wrapper"
            variants={container1}
            initial="hidden"
            animate="visible"
          >
            <span className="left" onClick={scrollHandlerLeft}>
              <AiOutlineCaretLeft />
            </span>
            <div className="carousel" ref={carouselRef}>
              <motion.li variants={item1}>
                <img src={pic1} ref={imgRef} alt="image1" />
              </motion.li>
              <motion.li variants={item1}>
                <img src={pic2} alt="image2" />
              </motion.li>
              <motion.li variants={item1}>
                <img src={pic3} alt="image3" />
              </motion.li>
              <motion.li variants={item1}>
                <img src={pic4} alt="image4" />
              </motion.li>
              <motion.li variants={item1}>
                <img src={pic5} alt="image5" />
              </motion.li>
              <motion.li variants={item1}>
                <img src={pic6} alt="image6" />
              </motion.li>
              {/* <img src={pic1} ref={imgRef} alt="image1" /> */}
              {/* <img src={pic2} alt="image2" /> */}
              {/* <img src={pic3} alt="image3" /> */}
              {/* <img src={pic4} alt="image4" /> */}
              {/* <img src={pic5} alt="image5" /> */}
              {/* <img src={pic6} alt="image6" /> */}
            </div>
            <span className="right" onClick={scrollHandlerRight}>
              <AiOutlineCaretRight />
            </span>
          </motion.ul>
          <div className="trendingPage">
            <h3 className="Titile">Trending Songs</h3>
            <hr />
            <motion.ul
              className="trendingWrapper"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <span className="left" onClick={TrendingScrollHandlerLeft}>
                <AiOutlineCaretLeft />
              </span>
              <div className="trendingCardsHolder" ref={trendingCarouselRef} >
                <motion.li variants={item} name="Jelebi" onClick={handleClick}>
                  {" "}
                  <TrendingCard
                    src={trending3}
                    name="Jelebi"
                    ref={trendingImageRef}
                  />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={trending1} name="Dil ne" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={trending4} name="oh sanam" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={trending5} name="galat" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={trending6} name="kiss me" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={trending7} name="Sugar Crash" />
                </motion.li>
                <motion.li variants={item}>
                  {" "}
                  <TrendingCard src={trending8} name="Peaches" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={trending2} name="Dil di gal" />
                </motion.li>
              </div>
              <span className="right" onClick={TrendingScrollHandlerRight}>
                <AiOutlineCaretRight />
              </span>
            </motion.ul>
          </div>
          <div className="artists" onClick={handleClick}>
            <h3 className="Titile">Artists</h3>
            <hr />
            <motion.ul
              className="trendingWrapper"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <span className="left" onClick={artistScrollHandlerLeft}>
                <AiOutlineCaretLeft />
              </span>
              <div
                className="trendingCardsHolder artistCards"
                ref={artistCarouselRef}
              >
                <motion.li variants={item}>
                  <TrendingCard
                    src={artist1}
                    name="Neha Kakkar"
                    ref={artistImageRef}
                  />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={artist2} name="Arijit singh" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={artist3} name="Badshah" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={artist4} name="payal" />
                </motion.li>
                <motion.li variants={item}>
                  {" "}
                  <TrendingCard src={artist5} name="Alka yagnik" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={artist6} name="tanisk bagachi" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={artist7} name="pritam" />
                </motion.li>
                <motion.li variants={item}>
                  <TrendingCard src={artist8} name="B Praak" />
                </motion.li>
              </div>
              <span className="right" onClick={artistScrollHandlerRight}>
                <AiOutlineCaretRight />
              </span>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;