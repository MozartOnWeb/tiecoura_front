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
      <Logo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9602.16"
          height="9298"
          viewBox="0 0 9602.16 9298"
        >
          <g id="logo" transform="translate(-7578.919 4114)">
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="7680"
              height="7680"
              transform="translate(8540 -3300)"
              fill="#e2293f"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M8540,7022H7593.919v916.813"
              transform="translate(10 -11111)"
              fill="none"
              stroke="#e2293f"
              stroke-width="50"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M7593.92,7022H8540v916.813"
              transform="translate(8616.08 -11111)"
              fill="none"
              stroke="#e2293f"
              stroke-width="50"
            />
            <path
              id="Path_8"
              data-name="Path 8"
              d="M7593.92,7938.813H8540V7022"
              transform="translate(8616.08 -2779.813)"
              fill="none"
              stroke="#e2293f"
              stroke-width="50"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M8540,7938.813H7593.92V7022"
              transform="translate(10 -2779.813)"
              fill="none"
              stroke="#e2293f"
              stroke-width="50"
            />
            <path
              id="Path_11"
              data-name="Path 11"
              d="M47,1997.114H302.57V677.732H503.832V418.967H302.57V-520.255c0-73.477,22.362-130.98,102.228-130.98,76.671,0,99.034,57.5,99.034,130.98V169.785H759.4V-552.2c0-214.04-102.228-357.8-332.242-357.8H382.436C142.839-910,47-766.242,47-552.2Zm1229.933,22.363h38.336c214.04,0,325.852-115.007,325.852-341.826V-124.121c0-226.818-111.812-341.825-325.852-341.825h-38.336c-217.235,0-325.852,115.007-325.852,341.825V1677.651C951.081,1904.47,1059.7,2019.477,1276.933,2019.477Zm-70.282-380.161V-95.369c0-67.087,28.752-140.564,89.45-140.564,47.92,0,86.255,44.725,86.255,146.953V1648.9c0,67.087-25.557,140.564-86.255,140.564C1254.57,1789.463,1206.651,1744.739,1206.651,1639.316Zm987.141,357.8V-910H1938.221V1997.114Zm300.3-12.778c3.195,226.819,172.51,332.242,380.161,332.242h38.335c217.235,0,383.356-111.812,383.356-338.631V-449.973H3037.174V1942.806c0,73.476-41.53,140.564-140.564,140.564-63.893,0-124.59-31.946-146.953-105.423V-910H2494.087ZM3075.51-657.624c22.362,25.557,54.309,38.335,89.45,38.335,73.477,0,130.98-54.309,130.98-127.785v-35.141c0-35.141-12.778-63.893-38.336-89.45C3235.241-897.221,3203.3-910,3164.96-910c-73.476,0-127.786,54.309-127.786,127.785v35.141C3037.174-711.933,3049.954-679.987,3075.51-657.624Zm843.382,2677.1h38.336c214.041,0,325.853-115.007,325.853-341.826V-124.121c0-226.818-111.812-341.825-325.853-341.825h-38.336c-217.234,0-325.852,115.007-325.852,341.825V1677.651C3593.04,1904.47,3701.658,2019.477,3918.892,2019.477Zm-70.281-380.161V-95.369c0-67.087,28.752-140.564,89.45-140.564,47.919,0,86.255,44.725,86.255,146.953V1648.9c0,67.087-25.557,140.564-86.255,140.564C3896.53,1789.463,3848.611,1744.739,3848.611,1639.316Zm731.571,236.4c0,63.893,47.919,111.812,111.812,111.812,67.087,0,115.006-47.919,115.006-111.812,0-60.7-47.919-115.007-115.006-115.007C4628.1,1760.712,4580.182,1815.021,4580.182,1875.718Z"
              transform="translate(9953 -163.289)"
              fill="#fffcfc"
            />
          </g>
        </svg>
      </Logo>
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
