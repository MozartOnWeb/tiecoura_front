import React, { useState, useEffect } from "react";

import { AnimatePresence } from "framer-motion";

// Import firestore
import { fs } from "../firebase/config";

import { Button } from "../layout";
import { PageNavLinks } from "./Styles/pagenavStyles";

const PageNav = () => {
  const [serieName, setSerieName] = useState([]);
  const [eventNames, setEventNames] = useState([]);

  useEffect(() => {
    let mounted = true;
    fs.collection("series")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        if (mounted) {
          setSerieName(tempNames);
        }
      });

    fs.collection("Actualities")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        if (mounted) {
          setEventNames(tempNames);
        }
      });

    return () => {
      mounted = false;
    };
  }, [serieName, eventNames]);

  return (
    <>
      <AnimatePresence>
        <PageNavLinks>
          {serieName.slice(0, 1).map((link) => (
            <Button
              key={link}
              activeClassName="active"
              small="true"
              to={`/photo/${link.name}`}
            >
              photos
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
          <Button small="true" to="/video" activeClassName="active">
            vidéos{" "}
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

          {eventNames.slice(0, 1).map((link) => (
            <Button
              key={link}
              activeClassName="active"
              small="true"
              to={`/events/${link.id}`}
            >
              évents
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

          <Button small="true" to="/about" activeClassName="active">
            à Propos{" "}
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
        </PageNavLinks>
      </AnimatePresence>
    </>
  );
};

export default PageNav;
