import "./Presentacion.css";
import AnimatedContent from "../../Reactbits/AnimatedContent/AnimatedContent";

function Presentacion() {
  return (
    <AnimatedContent
      distance={180}
      direction="horizontal"
      reverse={true}
      config={{ tension: 30, friction: 20 }}
      initialOpacity={0.3}
      animateOpacity={true}
      scale={0.9}
      threshold={0.1}
      delay={200}
    >
      <section className="container-servicios">
        <article className="articulo-servicios">
          <h1 className="title-servicios-precio">Paolo</h1>
          <p className="parrafo-servicio-precio">
            Un Diseñador Capilar y Asesor de Imagen enfocado en servicios de
            lujo combina creatividad y técnica para ofrecer transformaciones
            personalizadas que destacan la belleza única de cada cliente.
            Especialista en coloración, con título de Master en Color y
            experiencia docente, domina tendencias y técnicas avanzadas,
            brindando una experiencia de alta gama en su exclusivo Studio de
            Belleza. Su enfoque en la excelencia lo posiciona como referente en
            el diseño capilar y asesoramiento de imagen premium.
          </p>
        </article>
        <div className="div-container-image">
          <img className="imagen-perfil" src="/Perfil.jpg" alt="" />
        </div>
      </section>
    </AnimatedContent>
  );
}

export default Presentacion;
