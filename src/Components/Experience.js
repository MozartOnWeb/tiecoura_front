import React, { useEffect, useState } from "react";

// Import firestore
import { fs } from "../firebase/config";

// Import Modal
import Modal3 from "../Components/Modal3";

// Import Hook
import { useWindowSize } from "../hooks/useWindow";

import {
  ExperienceBox,
  ExperienceBoxes,
  ExperienceImage,
  ExperienceInfo,
  ExperienceStats,
  ExperienceWrapper,
} from "./Styles/experienceStyles";

// Import Components
import { Arrow, Button } from "../layout";

const Experience = ({ selected, setSelected }) => {
  const [serieName, setSerieName] = useState([]);
  const [secondVid, setSecondVid] = useState([]);
  const [thirdImg, setThirdImg] = useState([]);
  const [desc, setDesc] = useState("");
  const [clients, setClients] = useState("");
  const [years, setYears] = useState("");

  useEffect(() => {
    fs.collection("OtherImages")
      .doc("03")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setThirdImg(doc.data().url);
        }
      });

    fs.collection("OtherVideos")
      .doc("02")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSecondVid(doc.data().url);
        }
      });

    fs.collection("Descriptions")
      .doc("Experience-Desc")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDesc(doc.data().desc);
        }
      });

    fs.collection("Experiences")
      .doc("Clients")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setClients(doc.data().number);
        }
      });

    fs.collection("Experiences")
      .doc("Years")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setYears(doc.data().number);
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

  // Use Window size
  const size = useWindowSize();

  return (
    <div>
      {/* Experience Container */}
      <ExperienceWrapper>
        {/* Experience Big-Image */}
        <ExperienceImage>
          {size.width <= "375" ? (
            <video
              onClick={() => setSelected(secondVid)}
              src={secondVid}
              loop
              muted
            />
          ) : (
            <video
              onClick={() => setSelected(secondVid)}
              src={secondVid}
              loop
              autoPlay
              muted
            />
          )}
        </ExperienceImage>
        {/* Experience Big-Image */}

        {/* Experience Informations */}
        <ExperienceInfo>
          <p className="experienceDesc">{desc}</p>

          {/* Experience Stats */}
          <ExperienceStats>
            <img src={thirdImg} alt="third_img" />
            {/* Experience Boxes */}
            <ExperienceBoxes>
              {/* Experience SVG */}
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
                    transform="translate(80 345)"
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
                    transform="translate(80 869) rotate(-90)"
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
                    transform="translate(1080 867.344) rotate(180)"
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
                    transform="translate(1080 345) rotate(90)"
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
              {/* Experience SVG */}
              <ExperienceBox>
                <h3 className="headline">{years} Ans</h3>
                <p className="subline">d'Expérience</p>
              </ExperienceBox>
              <ExperienceBox>
                <h3 className="headline">{clients}</h3>
                <p className="subline">Clients</p>
              </ExperienceBox>
            </ExperienceBoxes>
            {/* Experience Boxes */}
          </ExperienceStats>
          {/* Experience Stats */}

          {serieName.slice(0, 1).map((link) => (
            <Button key={link.name} arrow="false" to={`/photo/${link.name}`}>
              Explorer
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
            </Button>
          ))}
        </ExperienceInfo>
        {/* Experience Informations */}

        <Arrow top="true" red="true">
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
        </Arrow>
      </ExperienceWrapper>
      {/* Experience Container */}
      {selected && <Modal3 selected={selected} setSelected={setSelected} />}
    </div>
  );
};

export default Experience;
