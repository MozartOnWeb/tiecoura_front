// Import Styled-components
import styled from "styled-components";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Styled BraekPoint
import { down } from "styled-breakpoints";

export const WelcomeWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  /* Enter Button Styles */
  a {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    svg {
      width: 25px;
      margin-top: 17px;
    }
    ${down("sm")} {
      left: 25%;
      font-size: 25px;
      svg {
        margin-top: 13px;
      }
    }
  }
`;

export const WelcomeGradient = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 0) 100%
  );

  z-index: 7;
`;

export const WelcomeImage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  right: 0;
  /* Border */
  border-top: 3px solid #fffdff;
  display: inline-block;
  margin: 0px auto;
  padding: 0px;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Logo = styled.img`
  z-index: 99;
  position: absolute;
  left: 5%;
  top: 5%;
  cursor: pointer;
  width: 80px;
  ${down("sm")} {
    width: 70px;
    left: 10%;
  }
`;

export const WelcomeDesc = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  width: 400px;
  z-index: 99;
  color: ${(props) => props.theme.white};
  h3 {
    text-transform: uppercase;
    font-family: ${(props) => props.theme.linkFont};
    letter-spacing: 1.5px;
  }
  p {
    font-family: ${(props) => props.theme.mainFont};
    font-size: 14px;
    line-height: 20px;
  }
  ${down("sm")} {
    left: 10%;
    width: 300px;
  }
`;
