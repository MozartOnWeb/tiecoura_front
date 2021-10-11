import { down, only } from "styled-breakpoints";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 50px 10px;
  position: fixed;
  transform: translateY(-100%);
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.black};
  z-index: 101;
  ${down("md")} {
    padding: 50px 0px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .menu-close {
    position: absolute;
    right: 135px;
    top: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
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
      margin-right: -50px;
    }
    ${down("sm")} {
      margin-right: -60px;
    }
  }
`;

export const MenuWrapper = styled.div`
  width: 90%;
  margin: 40px auto 0 auto;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${only("md")} {
    margin: 210px auto;
    height: 70%;
  }

  ${down("sm")} {
    margin: 90px auto;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  ${down("xs")} {
    margin: 70px auto;
    height: 63%;
    justify-content: space-between;
  }
  ${down("s")} {
    margin: 90px auto;
    height: 50%;
  }
`;

export const MenuLinks = styled.div`
  height: 350px;
  width: 40%;
  display: flex;
  align-items: left;
  justify-content: space-between;
  flex-direction: column;
  margin: 50px auto;
  ${down("md")} {
    margin: 150px auto;
  }

  ${down("sm")} {
    height: 300px;
    width: 100%;
    margin: 50px auto;
  }
  ${down("xs")} {
    height: 170px;
    width: 100%;
    margin: 0px auto;
  }

  a {
    ${down("sm")} {
      font-size: 18px;
      margin-top: 40px;
    }
    ${down("sm")} {
      font-size: 18px;
      margin-top: 20px;
    }
    ${down("s")} {
      font-size: 16px;
    }
    .menu-link-arrow {
      display: none;
      margin-top: 15px;
      width: 25px;
      ${down("sm")} {
        margin-top: 5px;
      }
      ${down("s")} {
        margin-top: 0px;
      }
    }

    &:hover {
      .menu-link-arrow {
        display: block;
      }
    }
  }
`;

export const MenuImage = styled.div`
  height: 360px;
  width: 40%;
  margin: 90px auto;
  ${down("sm")} {
    width: 100%;
    margin: 50px auto;
  }
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MenuSocials = styled.div`
  position: absolute;
  bottom: 140px;
  left: 130px;
  width: 285px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${down("sm")} {
    left: 60px;
  }
  ${down("xs")} {
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MenuDesc = styled.div`
  height: 360px;
  width: 40%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${down("sm")} {
    width: 100%;
    margin: 50px auto;
  }
  p {
    width: 70%;
    color: ${(props) => props.theme.white};
    line-height: 22px;
    word-break: break-all;
    ${down("sm")} {
      width: 100%;
    }
  }
`;
