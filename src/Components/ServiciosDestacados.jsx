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
      <section id="Servicios" class="container-servicios" data-aos="fade-right">
        <article class="articulo-servicios">
          <h1 class="title-servicios-precio">Mis Servicios</h1>
          <p class="parrafo-servicio-precio">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, quis
            totam expedita saepe similique quisquam dignissimos nam placeat
            velit! Cum!
          </p>
        </article>
        <div class="div-container-image">
          <img
            src="./Precios.jpeg"
            alt="Precios-Servicios"
            class="imagen-precios"
          />
        </div>
      </section>
    </>
  );
}

export default ServiciosDestacados;
