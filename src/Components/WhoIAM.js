import React, { useState, useEffect } from "react";

// Import firestore
import { fs } from "../firebase/config";

// Import Components
import { Button } from "../layout";

// Import Modal
import Modal2 from "../Components/Modal2";

// Import Styles
import {
  WhoHeadline,
  WhoImage,
  WhoInfo,
  WhoInfoWrapper,
  WhoParagraphe,
  WhoSubline,
  WhoWrapper,
} from "./Styles/whoiamStyles";

const WhoIAM = ({ selected, setSelected }) => {
  const [profile, setProfile] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fs.collection("Profile")
      .doc("01")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setProfile(doc.data().url);
        }
      });

    fs.collection("Descriptions")
      .doc("Profile-Desc")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDesc(doc.data().desc);
        }
      });
  }, []);

  return (
    <div>
      <WhoWrapper>
        <WhoHeadline>qui suis-je ?</WhoHeadline>
        <WhoInfoWrapper>
          <WhoInfo>
            <WhoSubline>Tiècoura n'daou</WhoSubline>
            <WhoParagraphe>{desc}</WhoParagraphe>
            <Button to="/about">
              En savoir plus
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
          </WhoInfo>
          <WhoImage onClick={() => setSelected(profile)}>
            <div>
              <img src={profile} alt="profile_image" />
            </div>
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
                  transform="translate(190 245)"
                >
                  <line
                    id="Ligne_2"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656)"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="3"
                  />
                </g>
                <g
                  id="Groupe_3"
                  data-name="Groupe 3"
                  transform="translate(191.656 985) rotate(-90)"
                >
                  <line
                    id="Ligne_2-2"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656 0)"
                    fill="none"
                    stroke="#E2293F"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3-2"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#E2293F"
                    strokeWidth="3"
                  />
                </g>
                <g
                  id="Groupe_4"
                  data-name="Groupe 4"
                  transform="translate(981.246 985.344) rotate(180)"
                >
                  <line
                    id="Ligne_2-3"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656 0)"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3-3"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#161616"
                    strokeWidth="3"
                  />
                </g>
                <g
                  id="Groupe_2"
                  data-name="Groupe 2"
                  transform="translate(977.38 245) rotate(90)"
                >
                  <line
                    id="Ligne_2-4"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656 0)"
                    fill="none"
                    stroke="#E2293F"
                    strokeWidth="3"
                  />
                  <line
                    id="Ligne_3-4"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#E2293F"
                    strokeWidth="3"
                  />
                </g>
              </g>
            </svg>
          </WhoImage>
        </WhoInfoWrapper>
      </WhoWrapper>
      {selected && <Modal2 selected={selected} setSelected={setSelected} />}
    </div>
  );
};

export default WhoIAM;
