import React, { useState, useEffect } from "react";

// Import Framer Motion
import { motion } from "framer-motion";

// Import firestore
import { fs } from "../firebase/config";

// Import Styled Components
import {
  WelcomeWrapper,
  WelcomeImage,
  WelcomeGradient,
} from "./Styles/welcomeStyles";

// Import LOGO
import LOGO from "../Assets/images/LOGO.jpg";

// Import Styled Components
import { Logo, WelcomeDesc } from "./Styles/welcomeStyles";
import { Button2 } from "../layout";

const Welcome = () => {
  const [image, setImage] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fs.collection("Welcome").onSnapshot((snapshot) => {
      const tempImage = [];
      snapshot.forEach((doc) => {
        tempImage.push({ ...doc.data(), id: doc.id });
      });
      setImage(tempImage);
    });

    fs.collection("Descriptions")
      .doc("Welcome-Desc")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDesc(doc.data().desc);
        }
      });
  }, []);

  return (
    <WelcomeWrapper>
      <Logo src={LOGO} alt="" />
      <Button2 welcome="true" to="/home">
        Entrez
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35.91"
          viewBox="0 0 35 35.91"
        >
          <path
            id="FontAwsome_arrow-down_"
            data-name="FontAwsome (arrow-down)"
            d="M38.306,47.268l1.779,1.779a1.916,1.916,0,0,1,0,2.717L24.512,67.345a1.916,1.916,0,0,1-2.717,0L6.215,51.764a1.916,1.916,0,0,1,0-2.717l1.779-1.779a1.926,1.926,0,0,1,2.749.032l9.2,9.658V33.924A1.919,1.919,0,0,1,21.868,32h2.565a1.919,1.919,0,0,1,1.924,1.924V56.958l9.2-9.658a1.912,1.912,0,0,1,2.749-.032Z"
            transform="translate(-5.65 -32)"
            fill="#fffdff"
          />
        </svg>
      </Button2>
      <WelcomeDesc>
        <motion.h3>Tiècoura N'Daou</motion.h3>
        <motion.p>{desc}</motion.p>
      </WelcomeDesc>
      <WelcomeGradient />
      <WelcomeImage>
        {image.map((img) => (
          <img key={img.name} src={img.url} alt="welcome_img" />
        ))}
      </WelcomeImage>
    </WelcomeWrapper>
  );
};

export default Welcome;
