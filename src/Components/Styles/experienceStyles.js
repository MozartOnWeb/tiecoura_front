import styled, { css } from "styled-components";
import { down, only } from "styled-breakpoints";
import { motion } from "framer-motion";

export const ExperienceWrapper = styled(motion.div)`
  width: 80%;
  padding: 50px 10px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 50px;
  ${down("md")} {
    padding: 30px;
    flex-direction: column-reverse;
    height: 100vh;
    position: relative;
  }
  ${down("xs")} {
    padding: 20px;
  }
`;

export const ExperienceImage = styled(motion.div)`
  width: 350px;
  height: 500px;
  cursor: pointer;
  ${only("md")} {
    width: 100%;
    height: 200px;
  }
  ${down("xs")} {
    display: none;
  }
  img,
  video {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${down("xs")} {
      display: none;
    }
  }
`;

export const ExperienceInfo = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  ${down("md")} {
    justify-content: space-between;
    height: 90%;
    width: 100%;
    a {
      position: absolute;
      bottom: 5%;
    }
  }
  ${down("xs")} {
    width: 80%;
    justify-content: space-around;
    a {
      position: relative;
      bottom: 0%;
      margin: 0px;
    }
  }

  ${down("s")} {
    margin-top: 25px;
    a {
      display: none;
    }
  }

  p {
    font-family: ${(props) => props.theme.mainFont};
    margin-top: 40px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    ${only("md")} {
      font-size: 14px;
      text-align: center;
      margin-bottom: 40px;
    }
    ${down("xs")} {
      font-size: 11px;
      text-align: center;
      margin-bottom: 0px;
      text-transform: uppercase;
      margin-top: 0px;
    }
    ${down("s")} {
      font-size: 10px;
      text-align: left;
      margin-bottom: 0px;
    }
  }
  .experienceDesc {
    hyphens: auto;
    ${down("s")} {
      font-size: 10px;
      margin-bottom: 0px;
      text-align: center;
    }
  }
`;

export const ExperienceStats = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${only("md")} {
    width: 100%;
  }
  ${down("xs")} {
    width: 250px;
    height: 280px;
    margin: 0px;
  }
  ${down("s")} {
    width: 230px;
    height: 280px;
  }
  img,
  video {
    cursor: pointer;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExperienceBoxes = styled(motion.div)`
  width: 370px;
  height: 170px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${down("xs")} {
    flex-direction: column;
    width: 250px;
    height: 280px;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    ${down("xs")} {
      display: none;
    }
  }
`;

export const ExperienceBox = styled(motion.div)`
  width: 95px;
  height: 95px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  ${(props) =>
    props.black &&
    css`
      background-color: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
    `}
  ${down("xs")} {
    width: 90px;
    height: 90px;
    padding: 15px;
  }
  .headline {
    color: ${(props) => props.theme.black};
    font-family: ${(props) => props.theme.mainFont};
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    margin: 0px;
    ${down("xs")} {
      font-size: 16px;
    }
    ${down("s")} {
      font-size: 14px;
    }
  }
  .subline {
    font-family: ${(props) => props.theme.mainFont};
    font-size: 12px;
    margin-top: 0px;
    text-align: center;
    text-transform: uppercase;
    margin: 0px;
    ${down("xs")} {
      font-size: 12px;
    }
  }
`;
