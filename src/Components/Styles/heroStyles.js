import styled from "styled-components";
import { only, down } from "styled-breakpoints";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  margin-bottom: 50px;
  position: relative;
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 53%;
  left: 50%;
  width: 75%;

  transform: translate(-50%, -50%);
  ${only("md")} {
    flex-direction: column;
    top: 50%;
    height: 80vh;
  }
  ${down("xs")} {
    flex-direction: column;
    top: 50%;
    height: 65vh;
  }
  ${down("s")} {
    height: 68vh;
  }
  /* Enter Button Styles */
  a {
    margin-right: 20px;
    align-self: flex-end;
    margin-bottom: 20px;
    letter-spacing: 1px;
    ${down("xs")} {
      align-items: normal;
      margin: 50px auto;
      font-size: 22px;
    }
    svg {
      width: 25px;
      margin-top: 15px;
      ${down("xs")} {
        width: 20px;
        margin-top: 10px;
      }
    }
  }
`;

export const HeroImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-areas: "squared1 rectangle" "squared2 rectangle";
  ${down("xs")} {
    margin-bottom: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .squared1 {
    grid-area: squared1;
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
    ::after {
      transition: 0.7s ease-in-out;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 15px;
      opacity: 0;
    }
    &:hover {
      h2 {
        opacity: 1;
      }
      ::after {
        opacity: 1;
      }
    }
    h2 {
      z-index: 2;
      transition: 0.7s ease-in-out .5s;
      position: absolute;
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.linkFont};
      font-size: 20px;
      text-transform: uppercase;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
        ${down("xs")} {
          font-size: 25px;
          left: 40%;
          top: 45%;
          line-height: 35px;
      }
    }
    a {
      text-decoration: none;
      }
      ${only("md")} {
        width: 220px;
        height: 190px;
      }
      ${down("xs")} {
        width: 100%;
        height: 180px;
      }
      ${down("s")} {
        width: 100%;
        height: 180px;
      }
      img,
      video {
        border-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }
  .squared2 {
    grid-area: squared2;
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
    ::after {
      transition: 0.7s ease-in-out;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 15px;
      opacity: 0;
    }
    &:hover {
      ::after {
        opacity: 1;
      }
      h2 {
        opacity: 1;
      }
    }
    h2 {
      z-index: 2;
      transition: 0.7s ease-in-out .5s;
      position: absolute;
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.linkFont};
      font-size: 20px;
      text-transform: uppercase;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    a {
      text-decoration: none;
    }
    ${down("md")} {
      width: 220px;
      height: 190px;
    }
    ${down("xs")} {
      width: 100%;
      height: 250px;
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
  }
  .rectangle {
    grid-area: rectangle;
    width: 200px;
    height: 420px;
    cursor: pointer;
    position: relative;
    ::after {
      transition: 0.7s ease-in-out;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 15px;
      opacity: 0;
    }
    &:hover {
      h2 {
        opacity: 1;
      }
      ::after {
        opacity: 1;
      }
    }
    h2 {
      z-index: 2;
      transition: 0.7s ease-in-out .5s;
      position: absolute;
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.linkFont};
      font-size: 20px;
      text-transform: uppercase;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    a {
      text-decoration: none;
    }
    ${only("md")} {
      width: 240px;
      height: 395px;
    }
    ${down("xs")} {
      display: none;
      video, img {
        display: none;
      }
    }
    img,
    video {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

export const HeroInfo = styled.div`
  font-family: ${(props) => props.theme.mainFont};
  position: relative;
  margin-left: 11%;
  ${down("md")} {
    margin-left: 0%;
  }
  ${down("xs")} {
    margin-top: 20%;
  }
  svg {
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 164%;
    height: 164%;
    ${down("md")} {
      width: 150%;
      height: 150%;
    }
    ${down("xs")} {
      top: 60%;
      width: 175%;
      height: 175%;
    }
  }
  .outline {
    color: ${(props) => props.theme.white};
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: -40px;
    margin-top: -40px;
    ${down("md")} {
      margin-bottom: -20px;
      margin-top: 0px;
      font-size: 35px;
    }
    ${down("xs")} {
      font-size: 23px;
    }
  }
  h1 {
    font-size: 75px;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: -30px;
    ${only("md")} {
      margin-bottom: 0px;
      font-size: 60px;
    }
    ${down("xs")} {
      font-size: 35px;
    }
  }
`;

// export const HeroImages = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: 1fr;
//   grid-row-gap: 20px;
//   grid-column-gap: 20px;
//   grid-template-areas: "squared1 rectangle" "squared2 rectangle";
//   ${down("xs")} {
//     margin-bottom: 4%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//   }

//   .squared1 {
//     grid-area: squared1;
//     width: 180px;
//     height: 185px;
//     cursor: pointer;
//     ${only("md")} {
//       width: 220px;
//       height: 190px;
//     }
//     ${down("xs")} {
//       width: 100%;
//       height: 250px;
//     }
//     ${down("s")} {
//       width: 100%;
//       height: 210px;
//     }
//     img,
//     video {
//       border-radius: 15px;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }
//   .squared2 {
//     grid-area: squared2;
//     width: 180px;
//     height: 185px;
//     cursor: pointer;
//     ${only("md")} {
//       width: 220px;
//       height: 190px;
//     }
//     ${down("xs")} {
//       width: 100%;
//       height: 250px;
//       display: none;
//     }
//     img,
//     video {
//       border-radius: 15px;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }
//   .rectangle {
//     grid-area: rectangle;
//     width: 180px;
//     height: 390px;
//     cursor: pointer;
//     ${only("md")} {
//       width: 240px;
//       height: 395px;
//     }
//     ${down("xs")} {
//       display: none;
//     }
//     img,
//     video {
//       border-radius: 15px;
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }
// `;
