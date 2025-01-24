import { useEffect } from "react";
import "./Presentacion.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Presentacion() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section
      id="Presentacion"
      class="container-servicios"
      data-aos="flip-right"
    >
      <article class="articulo-servicios">
        <h1 class="title-servicios-precio">Paolo....</h1>
        <p class="parrafo-servicio-precio">
          Un Diseñador Capilar y Asesor de Imagen enfocado en servicios de lujo
          combina creatividad y técnica para ofrecer transformaciones
          personalizadas que destacan la belleza única de cada cliente.
          Especialista en coloración, con título de Master en Color y
          experiencia docente, domina tendencias y técnicas avanzadas, brindando
          una experiencia de alta gama en su exclusivo Studio de Belleza. Su
          enfoque en la excelencia lo posiciona como referente en el diseño
          capilar y asesoramiento de imagen premium.
        </p>
      </article>
      <div class="div-container-image">
        <img class="imagen-perfil" src="/Perfil.jpg" alt="" />
      </div>
    </section>
  );
}

export default Presentacion;
