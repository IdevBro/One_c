import React, { useState, useEffect } from "react";
import Images from "../Images/Images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector(".menu").classList.toggle("open");
    document.body.classList.toggle("menu-open");
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={Images.logo} alt="Logo" />
            <p>1С-Товары</p>
          </div>
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a onClick={toggleMenu} href="#">
                  Как это работает
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#">
                  Инструкции
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#">
                  Продукты
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#">
                  База знаний
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#">
                  О нас
                </a>
              </li>
              <button className="navBtn">Вход</button>
            </ul>
          </div>
          <div className="burger" onClick={toggleMenu}>
            <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`line ${isMenuOpen ? "open" : ""}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
