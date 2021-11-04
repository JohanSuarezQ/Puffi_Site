import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoUmbrellaOutline, IoBagOutline } from "react-icons/io5";
import { FaBars, FaTimes, FaCloudversify } from "react-icons/fa";
import {MdKeyboardArrowDown} from 'react-icons/md'
import { IconContext } from "react-icons/lib";
import { RiCloudyLine } from "react-icons/ri";

const NavMenu = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(false);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <a href="#footer" className="navbar-logo" onClick={closeMobileMenu}>
              Pufi
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                className="nav-item"
                style={{ "border-right": "1px solid #ffff" }}
              >
                <a href="#sec1" className="nav-links" onClick={closeMobileMenu}>
                  <RiCloudyLine className="navbar-icon" size={"2.2rem"} />
                  PUFI PUFF
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#sec2"
                  className="nav-links"
                  style={{ "border-right": "1px solid #ffff" }}
                  onClick={closeMobileMenu}
                >
                  <IoUmbrellaOutline className="navbar-icon" size={"2.2rem"} />
                  PUFI RAIN
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#sec3"
                  className="nav-links"
                  style={{ "border-right": "1px solid #ffff" }}
                  onClick={closeMobileMenu}
                >
                  <IoBagOutline className="navbar-icon" size={"2.2rem"} />
                  PUFI CART
                </a>
              </li>
              <li className="nav-item">
                <a href="#sec4" className="nav-links" onClick={closeMobileMenu}>
                  <FaCloudversify className="navbar-icon" size={"2.2rem"} />
                  PUFI NAP
                </a>
              </li>
            </ul>
            <div className="nav-right">
              {button ? (
                <ul className="nav-right">
                  <li
                    className="nav-links"
                    style={{ "border-right": "1px solid" }}
                  >
                    <Link to="/sign-up">MI CUENTA
                    <MdKeyboardArrowDown size={"1.2rem"}/>
                    </Link>
                  </li>
                  <li className="nav-links">
                    <Link to="/sign-up">MI COMPRA</Link>
                  </li>
                </ul>
              ) : (
                <ul className="nav-right">
                  <li
                    className="nav-right-links"
                    style={{ "border-right": "1px solid" }}
                  >
                    <Link to="/sign-up" onClick={closeMobileMenu}>
                      MI CUENTA
                    </Link>
                  </li>
                  <li className="nav-right-links">
                    <Link to="/sign-up" onClick={closeMobileMenu}>
                      MI COMPRA
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default NavMenu;
