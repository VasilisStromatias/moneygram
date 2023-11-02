import React from "react";
import $ from "jquery";

import Logo from "../../assets/moneygram-logo.png";
import Menu from "../Menu/Menu";

function Header() {
  const toggleMenu = () => {
    $("body").toggleClass("menu-opened");
    $(".menu").toggleClass("open");
  };

  return (
    <>
      <div className="header">
        <div className="header-wrapper">
          <div className="header-inner">
            <div className="logo-container">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div className="header-links">
              <div className="header-links-inner">
                <div className="menu-toggle" onClick={toggleMenu}>
                  <Menu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
