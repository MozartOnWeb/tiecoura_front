import React from "react";
import { HeaderContainer, HeaderWrapper, Logo } from "./Styles/headerStyles";
import { Container } from "../layout";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Logo>Follio</Logo>
          <div red="true">
            <svg
              className="svg2"
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="101"
              viewBox="0 0 101 101">
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                fill="none"
                stroke="#000"
                strokeWidth="4"
                strokeDasharray="1 15">
                <circle cx="50.5" cy="50.5" r="50.5" stroke="none" />
                <circle cx="50.5" cy="50.5" r="48.5" fill="none" />
              </g>
            </svg>
            <svg
              className="svg1"
              xmlns="http://www.w3.org/2000/svg"
              width="27.429"
              height="24"
              viewBox="0 0 27.429 24">
              <path
                id="FontAwsome_bars_"
                data-name="FontAwsome (bars)"
                d="M.98,64.408H26.449a.98.98,0,0,0,.98-.98V60.98a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98v2.449A.98.98,0,0,0,.98,64.408Zm0,9.8H26.449a.98.98,0,0,0,.98-.98V70.776a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98v2.449A.98.98,0,0,0,.98,74.2Zm0,9.8H26.449a.98.98,0,0,0,.98-.98V80.571a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98V83.02A.98.98,0,0,0,.98,84Z"
                transform="translate(0 -60)"
                fill="#000"
              />
            </svg>
          </div>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;