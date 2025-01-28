import "./Cabecera.css";

import { useState } from "react";
import "./Cabecera.css";

const Cabecera = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    console.log("Click");
    setMenu(!menu);
  };

  function CloseNav() {
    setTimeout(() => {
      setMenu(!menu);
    }, 1000);
  }

  return (
    <header className="Cabecera">
      <h1 className="Cabecera-h1">
        <a href="#" className="Cabecera-a">
          Paolo Style
        </a>
      </h1>

      <button onClick={toggleMenu} className="Cabecera-button">
        <svg
          className="Cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav id="Navbar" className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <li className={`Cabecera-li ${menu && "li-movimiento"}`}>
            <a href="#Servicios" className="Cabecera-a" onClick={CloseNav}>
              Servicios
            </a>
          </li>
          <li className={`Cabecera-li ${menu && "li-movimiento"}`}>
            <a href="#Presentacion" className="Cabecera-a" onClick={CloseNav}>
              Presentacion
            </a>
          </li>
          <li className={`Cabecera-li ${menu && "li-movimiento"}`}>
            <a href="#Galeria" className="Cabecera-a" onClick={CloseNav}>
              Galeria
            </a>
          </li>
          <li className={`Cabecera-li ${menu && "li-movimiento"}`}>
            <a href="#contacto-paolo" className="Cabecera-a" onClick={CloseNav}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecera;
