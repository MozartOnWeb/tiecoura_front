// Import Styled components
import styled from "styled-components";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Styled Breakpoints
import { down } from "styled-breakpoints";

export const EventsWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;
  z-index: 500;
  overflow-x: hidden;
`;

export const EventContainer = styled.div`
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  width: 100%;
`;

export const EventNames = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin: 50px auto 30px auto;
`;

export const SingleName = styled.div`
  position: relative;
  text-align: center;
  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.bodyFont};
    text-transform: uppercase;
  }
  .active {
    font-weight: bold;
  }
`;

export const EventImage = styled.div`
  width: 80%;
  height: 250px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  cursor: pointer;
  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EventInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    color: ${(props) => props.theme.white};
    opacity: 0.7;
    span {
      text-transform: uppercase;
      font-size: 14px;
      text-decoration: underline;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  ${down("sm")} {
    flex-direction: column;
  }
`;

export const EventDesc = styled(motion.div)`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.bodyFont};
  font-weight: 300;
  width: 60vw;
  text-align: left;
  word-wrap: break-word;
  hyphens: auto;
  margin: 25px auto;
  line-height: 23px;
  ${down("xs")} {
    width: 85vw;
    font-size: 16px;
    word-wrap: break-word;
    hyphens: auto;
    text-align: left;
  }
  hr {
    width: 30px;
    margin-bottom: 30px;
    margin-right: 20px;
    border-color: ${(props) => props.theme.white};
    float: left;
  }
`;
