import { motion } from "framer-motion";
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PhotoWrapper = styled(motion.div)`
  width: 80%;
  height: 100%;
  margin: 20px auto;
  z-index: 500;
  overflow-x: hidden;
`;

export const PhotoImageWrapper = styled(motion.div)`
  .youtube {
    text-align: left;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    display: block;
    font-size: 18px;
  }

  .video {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .single-video {
      height: 250px;
      width: 500px;
      margin-bottom: 30px;
      iframe,
      video {
        height: 100%;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        border-radius: 15px;
        object-fit: cover;
      }
      ${down("xs")} {
        height: 300px;
        width: 250px;
        iframe,
        video {
          height: 100%;
          width: 100%;
          object-fit: fill;
        }
      }
    }
  }
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin-left: -30px;
    width: auto;
    height: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    img {
      cursor: pointer;
      overflow: hidden;
      border-radius: 15px;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const AboutHeader = styled(motion.h1)`
  text-align: center;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.linkFont};
  font-size: 16px;
  color: ${(props) => props.theme.white};
  letter-spacing: 1.2px;
  ${down("xs")} {
    font-size: 14px;
  }
`;

export const AboutContent = styled(motion.p)`
  text-align: center;
  font-family: ${(props) => props.theme.mainFont};
  font-size: 14px;
  color: ${(props) => props.theme.white};
  width: 550px;
  margin: 20px auto;
  line-height: 22px;
  ${down("xs")} {
    width: 100%;
    font-size: 14px;
    text-align: center;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

export const Line = styled(motion.hr)`
  border-color: ${(props) => props.theme.white};
`;

export const AboutInfo = styled(motion.div)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const AboutImage = styled(motion.div)`
  width: 100%;
  height: 350px;
  margin-bottom: 15px;
  border-radius: 15px;

  img,
  video,
  iframe {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transform-origin: top;
    object-position: 30% 25%;
  }
`;

export const SeriesName = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin: 30px auto 30px auto;
  ${down("sm")} {
    margin: 50px auto 30px auto;
  }
`;

export const SingleName = styled.div`
  position: relative;
  text-align: center;
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.bodyFont};
    text-transform: uppercase;
  }
  .active {
    font-weight: bold;
  }
`;

export const SerieInfo = styled.p`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.bodyFont};
  font-weight: 300;
  width: 60vw;
  text-align: left;
  word-wrap: break-word;
  hyphens: auto;
  margin: 0 auto;
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
