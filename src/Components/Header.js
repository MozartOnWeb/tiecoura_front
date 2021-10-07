import React, { useEffect, useState } from "react";

// Import Antd
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import {
  UserOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

// Import Link
import { Link } from "react-router-dom";

// Import Firebase
import { fs } from "../firebase/config";

// Import Hook
import { useWindowSize } from "../hooks/useWindow";

// Import Styled-Components
import { HeaderContainer, HeaderWrapper } from "./Styles/headerStyles";
import { Container } from "../layout";

const Header = () => {
  const [serieName, setSerieName] = useState([]);
  const [eventName, setEventName] = useState([]);

  // Use Window size
  const size = useWindowSize();

  useEffect(() => {
    fs.collection("series")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        setSerieName(tempNames);
      });

    fs.collection("Actualities")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        setEventName(tempNames);
      });
  }, []);

  // Menu
  const menu = (
    <Menu style={{ marginTop: "25px", width: "130px" }}>
      <Menu.Item icon={<PictureOutlined />} key="0">
        {serieName.slice(0, 1).map((link) => (
          <Link key={link.name} big="true" to={`/photos/${link.name}`}>
            PHOTOS
          </Link>
        ))}
      </Menu.Item>
      <Menu.Item icon={<VideoCameraOutlined />} key="1">
        <Link to="/videos">VIDEOS</Link>
      </Menu.Item>
      <Menu.Item icon={<CalendarOutlined />} key="2">
        {eventName.slice(0, 1).map((link) => (
          <Link key={link.name} big="true" to={`/events/${link.name}`}>
            EVENTS
          </Link>
        ))}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<UserOutlined />} key="3">
        <Link to="/about">A PROPOS</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper>
      <Container>
        {/* Header Container */}
        <HeaderContainer>
          {/* Humburger Components */}
          <div className="menu-container">
            <svg
              className="svg2"
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="101"
              viewBox="0 0 101 101"
            >
              <g
                id="Ellipse_2"
                data-name="Ellipse 2"
                fill="none"
                stroke="#000"
                strokeWidth="4"
                strokeDasharray="1 15"
              >
                <circle cx="50.5" cy="50.5" r="50.5" stroke="none" />
                <circle cx="50.5" cy="50.5" r="48.5" fill="none" />
              </g>
            </svg>

            <div style={{ zIndex: "99", marginTop: "5px" }}>
              {size.width <= "375" ? (
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomCenter"
                >
                  <Link
                    to=""
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      className="svg1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.429"
                      height="24"
                      viewBox="0 0 27.429 24"
                    >
                      <path
                        id="FontAwsome_bars_"
                        data-name="FontAwsome (bars)"
                        d="M.98,64.408H26.449a.98.98,0,0,0,.98-.98V60.98a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98v2.449A.98.98,0,0,0,.98,64.408Zm0,9.8H26.449a.98.98,0,0,0,.98-.98V70.776a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98v2.449A.98.98,0,0,0,.98,74.2Zm0,9.8H26.449a.98.98,0,0,0,.98-.98V80.571a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98V83.02A.98.98,0,0,0,.98,84Z"
                        transform="translate(0 -60)"
                        fill="#000"
                      />
                    </svg>
                  </Link>
                </Dropdown>
              ) : (
                <Dropdown
                  overlay={menu}
                  trigger={["click", "hover"]}
                  placement="bottomCenter"
                >
                  <Link
                    to=""
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      className="svg1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.429"
                      height="24"
                      viewBox="0 0 27.429 24"
                    >
                      <path
                        id="FontAwsome_bars_"
                        data-name="FontAwsome (bars)"
                        d="M.98,64.408H26.449a.98.98,0,0,0,.98-.98V60.98a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98v2.449A.98.98,0,0,0,.98,64.408Zm0,9.8H26.449a.98.98,0,0,0,.98-.98V70.776a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98v2.449A.98.98,0,0,0,.98,74.2Zm0,9.8H26.449a.98.98,0,0,0,.98-.98V80.571a.98.98,0,0,0-.98-.98H.98a.98.98,0,0,0-.98.98V83.02A.98.98,0,0,0,.98,84Z"
                        transform="translate(0 -60)"
                        fill="#000"
                      />
                    </svg>
                  </Link>
                </Dropdown>
              )}
            </div>
          </div>
          {/* Humburger Components */}
        </HeaderContainer>
        {/* Header Container */}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
