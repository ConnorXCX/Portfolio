import { useState } from "react";
import { TITLE, NAV_LINKS, BUTTON_TEXT } from "../utils/data";
import { resumePDF } from "../assets";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <NavBarMobile isOpen={toggle} toggleMenu={toggleMenu} />

      <nav className="bg-defaultLightBlurBackground sticky z-30 backdrop-blur-[50px] px-0 py-2 top-0 xl:px-8 xl:py-0">
        <div className="max-w-[1300px] flex items-center justify-between mx-auto my-0 px-0 py-4">
          <h1 className="items-baseline">{TITLE}</h1>

          <ul className="flex items-center gap-2 list-none lg:hidden">
            {NAV_LINKS.map((nav, index) => (
              <li className="mx-6 my-0" key={nav.id}>
                <a
                  className="no-underline text-[0.9rem] font-bold text-primary relative cursor-pointer before:bg-secondary before:content-['_'] before:w-8 before:h-[0.2rem] before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-[0.3s] before:ease-[ease] before:rounded-lg hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100"
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li className="mx-6 my-0">
              <a
                className="flex flex-row items-center no-underline text-[0.9rem] font-bold text-primary relative cursor-pointer before:bg-secondary before:content-['_'] before:w-8 before:h-[0.2rem] before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-[0.3s] before:ease-[ease] before:rounded-lg hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100"
                href={resumePDF}
              >
                <div className="mr-2">Resume</div>
                <FileDownloadIcon />
              </a>
            </li>
            <a
              className="bg-defaultDarkBlurBackground outline-[1.5px] outline outline-transparent no-underline text-[0.9rem] font-medium flex items-center justify-center text-secondary cursor-pointer transition-all duration-[0.3] ease-[ease] px-8 py-[0.6rem] rounded-[0.2rem] border-[none] hover:bg-none hover:bg-primary hover:text-secondary hover:outline-[1.5px] hover:outline hover:outline-secondary"
              href="#contact"
            >
              {BUTTON_TEXT}
            </a>
          </ul>

          <div
            className="hidden lg:bg-defaultDarkBlurBackground lg:flex lg:w-10 lg:h-10 lg:text-2xl lg:items-center lg:justify-center lg:text-primary lg:leading-[0] lg:cursor-pointer lg:transition-all lg:duration-[0.4s] lg:ease-[ease] lg:rounded-[0.4rem]  hover:bg-primary hover:text-secondary hover:outline-[1.5px] hover:outline hover:outline-secondary"
            onClick={toggleMenu}
          >
            {toggle ? (
              <CloseOutlinedIcon style={{ fontSize: "1.8rem" }} />
            ) : (
              <MenuOutlinedIcon style={{ fontSize: "1.8rem" }} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
