import { useEffect } from "react";
import "./ServiciosDestacados.css";
import Aos from "aos";
import "aos/dist/aos.css";

function ServiciosDestacados() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <section
        id="Servicios"
        className="container-servicios"
        data-aos="fade-right"
      >
        <article className="articulo-servicios">
          <h1 className="title-servicios-precio">Mis Servicios</h1>
          <p className="parrafo-servicio-precio">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, quis
            totam expedita saepe similique quisquam dignissimos nam placeat
            velit! Cum!
          </p>
        </article>
        <div className="div-container-image">
          <img
            src="./Precios.jpeg"
            alt="Precios-Servicios"
            className="imagen-precios"
          />
        </div>
      </section>
    </>
  );
}

export default ServiciosDestacados;
