import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import LOGO from "../../assets/imgs/logoJel.png";
import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 238 && window.innerWidth > 860);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`nav ${scrollY ? "nav__scroll" : ""}`}>
      <div className="container__nav">
        <div className="nav__logo">
          <img src={LOGO} alt="logo Jeisel Torres" className="logo" />
        </div>
        <ul className={`nav__list ${showMenu ? "show-menu" : ""}`}>
          <li className="list__item">Inicio</li>
          <li className="list__item">Eventos</li>
          <li className="list__item">Acerca de</li>
          <li className="list__item">Contacto</li>
        </ul>
      </div>
      <div className="responsive__menu" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FiX /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Nav;
