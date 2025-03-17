import "./BotonFixed.css";
import { useState, useEffect } from "react";

function BotonFixed() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`boton-fixed ${isVisible ? "visible" : ""}`}>
      <a href="#Navbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="currentColor"
          className="bi bi-arrow-up-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
          />
        </svg>
      </a>
    </div>
  );
}

export default BotonFixed;
