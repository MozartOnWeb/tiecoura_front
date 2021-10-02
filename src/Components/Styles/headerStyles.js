import styled from "styled-components";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  ${down("xs")} {
    height: 90px;
  }
`;

export const HeaderContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  padding: 10px 0px;
  z-index: 99;

  .overlay-className {
  }
  .menu-container {
    z-index: 99;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    .svg1 {
      width: 25px;
      cursor: pointer;
      path {
        fill: ${(props) => props.theme.white};
      }
      ${down("xs")} {
        width: 18px;
      }
    }
    .svg2 {
      #Ellipse_2 {
        stroke: ${(props) => props.theme.white};
      }
      position: absolute;
      width: 70px;
      cursor: pointer;
      ${down("xs")} {
        width: 60px;
      }
    }
    ${down("md")} {
      margin-right: 50px;
    }
    ${down("sm")} {
      margin-right: 50px;
    }
  }
`;

export const Logo = styled.img`
  z-index: 99;
  cursor: pointer;
  width: 70px;
  ${down("md")} {
    width: 60px;
    margin-left: 30px;
  }
  ${down("sm")} {
    width: 60px;
    margin-left: 20px;
  }
`;
