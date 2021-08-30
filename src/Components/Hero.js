import React, { useState, useEffect } from "react";

// Import React Router Dom
import { Link } from "react-router-dom";

// Import Modal
import Modal2 from "../Components/Modal2";

// Import firestore
import { fs } from "../firebase/config";

// Import Hook
import { useWindowSize } from "../hooks/useWindow";

// Import Styled Components
import {
  BackgroundImage,
  HeroInfo,
  HeroWrapper,
  HeroImages,
  HeroContainer,
} from "./Styles/heroStyles";
import { Arrow, Container } from "../layout";

// Import Framer Motion
import { motion } from "framer-motion";

// Import React Slick
import Slider from "react-slick";
import "./Styles/slick.css";

const Hero = () => {
  const [BG, setBG] = useState([]);
  const [serieName, setSerieName] = useState([]);
  const [firstImg, setFirstImg] = useState([]);
  const [secondImg, setSecondImg] = useState([]);
  const [firstVid, setFirstVid] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Background Images
    fs.collection("BGImages").onSnapshot((snap) => {
      const tempBG = [];
      snap.forEach((doc) => {
        tempBG.push({ ...doc.data(), id: doc.id });
      });
      setBG(tempBG);
    });

    // Boxes Images
    fs.collection("OtherImages")
      .doc("01")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirstImg(doc.data().url);
        }
      });

    fs.collection("OtherImages")
      .doc("02")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSecondImg(doc.data().url);
        }
      });

    // Boxes Video
    fs.collection("OtherVideos")
      .doc("01")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirstVid(doc.data().url);
        }
      });
  }, []);

  fs.collection("series")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      const tempNames = [];
      snapshot.forEach((doc) => {
        tempNames.push({ ...doc.data(), id: doc.id });
      });
      setSerieName(tempNames);
    });

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 10000,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 414,
        settings: {
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          swipeToSlide: false,
          autoplaySpeed: 15000,
        },
      },
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  };

  // Use Window size
  const size = useWindowSize();

  return (
    <HeroContainer>
      {/* Slider Component */}

      <Slider {...settings}>
        {BG.map((bg) => (
          <BackgroundImage key={bg.name}>
            <img src={bg.url} alt="" />
          </BackgroundImage>
        ))}
      </Slider>

      {/* Slider Component */}

      {/* Hero Informations Container */}
      <Container>
        <HeroWrapper>
          {/* Hero Informations */}
          <HeroInfo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="791.246"
              height="524.948"
              viewBox="0 0 791.246 524.948"
            >
              <g
                id="Groupe_5"
                data-name="Groupe 5"
                transform="translate(-190 -344.052)"
              >
                <g
                  id="Groupe_1"
                  data-name="Groupe 1"
                  transform="translate(190 345)"
                >
                  <line
                    id="Ligne_2"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                </g>
                <g
                  id="Groupe_3"
                  data-name="Groupe 3"
                  transform="translate(191.656 869) rotate(-90)"
                >
                  <line
                    id="Ligne_2-2"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656 0)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3-2"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                </g>
                <g
                  id="Groupe_4"
                  data-name="Groupe 4"
                  transform="translate(981.246 867.344) rotate(180)"
                >
                  <line
                    id="Ligne_2-3"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656 0)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3-3"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                </g>
                <g
                  id="Groupe_2"
                  data-name="Groupe 2"
                  transform="translate(977.38 345) rotate(90)"
                >
                  <line
                    id="Ligne_2-4"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656 0)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3-4"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#e2293f"
                    strokeWidth="3"
                  />
                </g>
              </g>
            </svg>
            <p className="outline">Tiecoura</p>
            <h1>African</h1>
            <h1>Studio.</h1>
          </HeroInfo>
          {/* Hero Informations */}

          {/* Hero Images */}
          <HeroImages>
            <div className="squared1">
              {serieName.slice(0, 1).map((link) => (
                <Link key={link.name} to={`/photo/${link.name}`}>
                  <h2>Voir les Photos</h2>
                  <img
                    src={firstImg}
                    alt=""
                    onClick={() => setSelected(firstImg)}
                  />
                </Link>
              ))}
            </div>

            <div className="squared2">
              <Link to="/video">
                <h2>Voir les Vidéos</h2>
                {size.width <= "375" ? (
                  <video src={firstVid} loop muted />
                ) : (
                  <video src={firstVid} loop muted autoPlay />
                )}
              </Link>
            </div>

            <div className="rectangle">
              <Link to="/about">
                <h2>A Propos de moi</h2>
                <img src={secondImg} alt="" />
              </Link>
            </div>
          </HeroImages>
          {/* Hero Images */}
        </HeroWrapper>
        <Arrow bottom="true">
          <motion.svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35.91"
            viewBox="0 0 35 35.91"
            initial={{
              y: 25,
              opacity: 0.2,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              yoyo: Infinity,
              type: "spring",
              stiffness: 80,
            }}
          >
            <path
              id="FontAwsome_arrow-down_"
              data-name="FontAwsome (arrow-down)"
              d="M38.306,47.268l1.779,1.779a1.916,1.916,0,0,1,0,2.717L24.512,67.345a1.916,1.916,0,0,1-2.717,0L6.215,51.764a1.916,1.916,0,0,1,0-2.717l1.779-1.779a1.926,1.926,0,0,1,2.749.032l9.2,9.658V33.924A1.919,1.919,0,0,1,21.868,32h2.565a1.919,1.919,0,0,1,1.924,1.924V56.958l9.2-9.658a1.912,1.912,0,0,1,2.749-.032Z"
              transform="translate(-5.65 -32)"
              fill="#fffdff"
            />
          </motion.svg>
        </Arrow>
      </Container>
      {/* Hero Information Container */}
      {selected && <Modal2 selected={selected} setSelected={setSelected} />}
    </HeroContainer>
  );
};

export default Hero;
