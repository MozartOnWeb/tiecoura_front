import styled from "styled-components";
import { only, down } from "styled-breakpoints";

export const FooterWrapper = styled.div`
  width: 100vw;
  padding: 30px;
  padding: 60px 10px;
  position: relative;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${down("md")} {
    padding: 40px 0px;
  }
`;

export const FooterInfoWrapper = styled.div`
  width: 87%;
  margin-right: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dot span {
    display: none;
  }
  ${down("md")} {
    justify-content: space-around;
    margin-right: 0px;
  }
  ${down("xs")} {
    width: 100%;
    .form {
      display: none;
    }
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 350px;
  ${down("md")} {
    height: 300px;
  }
  ${down("xs")} {
    text-align: center;
  }
`;

export const FooterInfos = styled.div`
  width: 300px;
  ${down("md")} {
    width: 200px;
  }
  ${down("xs")} {
    width: 100%;
  }
  p {
    font-size: 13px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-weight: 300;
    opacity: 0.7;
    text-transform: uppercase;
    ${down("md")} {
      font-size: 11px;
    }
    ${down("xs")} {
      font-size: 9px;
    }
  }
  p.lowercase {
    text-transform: lowercase;
  }
  span {
    font-size: 13px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-weight: 300;
    letter-spacing: 1.2px;
    position: absolute;
    margin-top: 10px;
    ${down("md")} {
      margin-top: 0px;
      font-size: 8px;
    }
    ${down("xs")} {
      font-size: 11px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  button {
    margin-top: 20px;
  }
`;
export const FooterHeadline = styled.h4`
  font-size: 14px;
  font-family: ${(props) => props.theme.linkFont};
  color: ${(props) => props.theme.white};
  letter-spacing: 1.2px;
  text-transform: uppercase;
  ${down("md")} {
    font-size: 12px;
  }
  ${down("xs")} {
    font-size: 10px;
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  ${down("xs")} {
    width: 100%;
    justify-content: space-around;
  }
  &.simple {
    width: 70%;
    ${down("md")} {
      width: 40%;
    }
    ${down("xs")} {
      width: 100%;
      justify-content: space-around;
    }
  }
  svg {
    width: 25px;
    height: 25px;
    ${down("xs")} {
      width: 20px;
    }
  }
  svg.red {
    cursor: pointer;
    width: 30px;
    height: 30px;
    ${down("xs")} {
      width: 20px;
    }
    path {
      fill: ${(props) => props.theme.white};
      &:hover {
        opacity: 0.5;
        transition: 0.5s ease-in;
      }
    }
  }
`;

export const FooterForm = styled.div`
  width: 300px;
  ${only("md")} {
    width: 200px;
  }
  form {
    input {
      margin-bottom: 10px;
    }
    textarea {
      resize: none;
    }
    input,
    textarea {
      font-family: ${(props) => props.theme.mainFont};
      color: ${(props) => props.theme.white};
      font-size: 14px;
      padding: 10px 10px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.white};
      background: rgba(255, 255, 255, 0.03);
      width: 100%;
      position: relative;
      outline: none;
      ${only("md")} {
        font-size: 12px;
      }
    }
    input[type="email"]::placeholder {
      font-size: 12px;
      ${only("md")} {
        font-size: 10px;
      }
    }
    input[type="text"]::placeholder {
      font-size: 12px;
      ${only("md")} {
        font-size: 10px;
      }
    }
  }
`;
