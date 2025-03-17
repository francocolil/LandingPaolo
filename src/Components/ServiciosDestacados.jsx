import SplitText from "../../Reactbits/SplitText/SplitText";
import AnimatedContent from "../../Reactbits/AnimatedContent/AnimatedContent";
import "./ServiciosDestacados.css";

function ServiciosDestacados() {
  return (
    <div className="container-main">
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
        <section
          id="Servicios"
          className="container-servicios"
          data-aos="fade-right"
        >
          <article className="articulo-servicios">
            <SplitText
              text="Mis Servicios"
              className="title-servicios-precio"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />

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
              className="imagen-precios "
            />
          </div>
        </section>
      </AnimatedContent>
    </div>
  );
}

export default ServiciosDestacados;
