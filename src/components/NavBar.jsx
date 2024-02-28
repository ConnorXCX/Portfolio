import { useState } from "react";
import { TITLE, NAV_LINKS, BUTTON_TEXT } from "../utils/data";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <NavBarMobile isOpen={toggle} toggleMenu={toggleMenu} />

      <nav className="bg-navWrapperBackground sticky z-30 backdrop-blur-[50px] px-0 py-2 top-0 xl:px-8 xl:py-0">
        <div className="max-w-[1300px] flex items-center justify-between mx-auto my-0 px-0 py-4">
          <h1 className="items-baseline">{TITLE}</h1>

          <ul className="flex items-center gap-2 list-none lg:hidden">
            {NAV_LINKS.map((nav, index) => (
              <li className="mx-6 my-0" key={nav.id}>
                <a
                  className="no-underline text-[0.9rem] font-medium text-white relative cursor-pointer before:bg-menuItemGradient before:content-['_'] before:w-8 before:h-[0.2rem] before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-[0.3s] before:ease-[ease] before:rounded-lg hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100"
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <a
              className="bg-menuItemGradient outline-[1.5px] outline outline-transparent no-underline text-[0.9rem] font-medium flex items-center justify-center text-white cursor-pointer transition-all duration-[0.3] ease-[ease] px-8 py-[0.6rem] rounded-[0.2rem] border-[none] hover:bg-none hover:bg-[#000] hover:text-[#a993fe] hover:outline-[1.5px] hover:outline hover:outline-[#a993fe]"
              href="#contact"
            >
              {BUTTON_TEXT}
            </a>
          </ul>

          <div
            className="hidden lg:bg-contactButtonBackground lg:flex lg:w-10 lg:h-10 lg:text-2xl lg:items-center lg:justify-center lg:text-white lg:leading-[0] lg:cursor-pointer lg:transition-all lg:duration-[0.4s] lg:ease-[ease] lg:rounded-[0.4rem] lg:border-[none] hover:text-[#a993fe] hover:border hover:border-solid hover:border-[#a993fe] hover:bg-none hover:bg-[#000]"
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
