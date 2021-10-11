import React, { useState, useEffect } from "react";

// Import Components
import { Button } from "../layout";

// Import Link
import { Link } from "react-router-dom";

// Import firestore
import { fs } from "../firebase/config";

// Import Modal
import Modal2 from "../Components/Modal2";

// Import Styles
import {
  PortfolioHeadline,
  PortfolioImage,
  PortfolioImages,
  PortfolioInfo,
  PortfolioLinks,
  PortfolioWrapper,
  PortfolioContainer,
} from "./Styles/portfolioStyles";

const Portfolio = ({ selected, setSelected }) => {
  const [serieName, setSerieName] = useState([]);

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
  }, []);

  return (
    <>
      <PortfolioContainer>
        <PortfolioWrapper>
          <PortfolioInfo>
            <PortfolioHeadline>Portfolio</PortfolioHeadline>
            <PortfolioLinks>
              <h2>Réçents</h2>
            </PortfolioLinks>
          </PortfolioInfo>
          <PortfolioImages>
            {serieName.slice(0, 6).map((image) => (
              <PortfolioImage
                key={image.name}
                onClick={() => setSelected(image.images[0].url)}
              >
                {image.images && (
                  <img src={image.images[0].url} alt={image.name} />
                )}
                {image.name && (
                  <Link to={`/photo/${image.name}`}>{image.name}</Link>
                )}
              </PortfolioImage>
            ))}
          </PortfolioImages>
        </PortfolioWrapper>
        {serieName.slice(0, 1).map((link) => (
          <Button
            className="portfolio-button"
            key={link.name}
            center="true"
            to={`/photos/${link.name}`}
          >
            VOIR PLUS
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
      </PortfolioContainer>
      {selected && <Modal2 selected={selected} setSelected={setSelected} />}
    </>
  );
};

export default Portfolio;
