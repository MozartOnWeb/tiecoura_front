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
              to={`/photos/${link.name}`}
            >
              photos
            </Button>
          ))}
          <Button small="true" to="/videos" activeClassName="active">
            vidéos{" "}
          </Button>

          {eventNames.slice(0, 1).map((link) => (
            <Button
              key={link}
              activeClassName="active"
              small="true"
              to={`/events/${link.id}`}
            >
              évents
            </Button>
          ))}

          <Button small="true" to="/about" activeClassName="active">
            à Propos{" "}
          </Button>
        </PageNavLinks>
      </AnimatePresence>
    </>
  );
};

export default PageNav;
