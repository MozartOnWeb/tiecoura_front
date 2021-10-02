import React, { useState, useEffect } from "react";

// Import firestore
import { fs } from "../firebase/config";

import { Button } from "../layout";
import {
  MenuContainer,
  MenuLinks,
  MenuSocials,
  MenuWrapper,
  MenuDesc,
} from "./Styles/menuStyles";

const Menu = () => {
  const [serieName, setSerieName] = useState([]);
  const [eventName, setEventName] = useState([]);

  useEffect(() => {
    fs.collection("series")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        setSerieName(tempNames);
      });

    fs.collection("Actualities")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        setEventName(tempNames);
      });
  }, []);

  return (
    <MenuContainer className="menu-container">
      <div className="menu-close">
        <svg
          className="svg2"
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="101"
          viewBox="0 0 101 101"
        >
          <g
            id="Ellipse_2"
            data-name="Ellipse 2"
            fill="none"
            stroke="#000"
            strokeWidth="4"
            strokeDasharray="1 15"
          >
            <circle cx="50.5" cy="50.5" r="50.5" stroke="none" />
            <circle cx="50.5" cy="50.5" r="48.5" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.75"
          height="24.75"
          viewBox="0 0 24.75 24.75"
          className="svg1"
        >
          <path
            id="Icon_awesome-times"
            data-name="Icon awesome-times"
            d="M17.066,18,24.1,10.964a2.212,2.212,0,0,0,0-3.128L22.539,6.273a2.212,2.212,0,0,0-3.128,0l-7.036,7.036L5.339,6.273a2.212,2.212,0,0,0-3.128,0L.648,7.836a2.212,2.212,0,0,0,0,3.128L7.684,18,.648,25.036a2.212,2.212,0,0,0,0,3.128l1.564,1.564a2.212,2.212,0,0,0,3.128,0l7.036-7.036,7.036,7.036a2.212,2.212,0,0,0,3.128,0L24.1,28.164a2.212,2.212,0,0,0,0-3.128Z"
            transform="translate(0 -5.625)"
            fill="#fffdff"
          />
        </svg>
      </div>
      <MenuWrapper>
        <MenuLinks>
          {serieName.slice(0, 1).map((link) => (
            <Button key={link.name} big="true" to={`/photo/${link.name}`}>
              Photos
              <svg
                className="arrow menu-link-arrow"
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
          <Button big="true" to="/video">
            vidéos
            <svg
              className="arrow menu-link-arrow"
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

          {eventName.slice(0, 1).map((link) => (
            <Button key={link.name} big="true" to={`/events/${link.name}`}>
              Events
              <svg
                className="arrow menu-link-arrow"
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

          <Button big="true" to="/about">
            à Propos
            <svg
              className="arrow menu-link-arrow"
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
        </MenuLinks>
        <MenuDesc>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dicta
            temporibus alias explicabo aut autem commodi natus? Enim inventore,
            consectetur reprehenderit voluptas nihil laudantium hic sed
            distinctio, beatae quam excepturi?
          </p>
        </MenuDesc>
      </MenuWrapper>
      <MenuSocials>
        <Button social="true" to="/">
          instagram
        </Button>
        <Button social="true" to="/">
          facebook
        </Button>
        <Button social="true" to="/">
          flickr
        </Button>
        <Button social="true" to="/">
          youtube
        </Button>
      </MenuSocials>
    </MenuContainer>
  );
};

export default Menu;
