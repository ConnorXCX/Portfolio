import React from "react";
import { useState } from "react";
import { NAV_LINKS } from "../utils/data";
import "./NavBar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <img className="logo" src="https://placehold.co/300x80" />
        <ul>
          {NAV_LINKS.map((nav, index) => (
            <li key={nav.id}>
              <a className="menu-item" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
        <button className="menu-btn" onClick={() => {}}>
          <MenuOutlinedIcon style={{ fontSize: "1.8rem" }} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
