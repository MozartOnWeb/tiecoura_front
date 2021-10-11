import styled from "styled-components";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

export const PageNavLinks = styled(motion.div)`
  width: 450px;
  margin: 40px auto 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;
  ${down("md")} {
    margin: 80px auto 0px auto;
  }
  ${down("sm")} {
    flex-direction: column;
    margin: 80px auto 0px auto;
    width: 280px;
    height: 100px;
  }
  ${down("s")} {
    width: 230px;
  }

  a {
    ${down("md")} {
      font-size: 18px;
    }
    ${down("sm")} {
      font-size: 14px;
      margin-top: 10px;
    }
    &.active {
      color: ${(props) => props.theme.red};
      &::after {
        border-color: ${(props) => props.theme.red};
      }
    }
  }
`;
