import "./ImagenFixed2.css";
import SplitText from "../../Reactbits/SplitText/SplitText";

function ImagenFixed2() {
  return (
    <div class="fondo-imagen">
      <div class="container-texto">
        <SplitText
          text="Renueva tu Estilo con Paolo!!!!!"
          className="title-fixed"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
        {/* <h1 class="title-fixed">Renueva tu Estilo con Paolo!!!!!</h1> */}
        <SplitText
          text="Siéntete especial con una asesoría personalizada de Paolo. Él te
          ayudará a encontrar el look perfecto para cualquier ocasión."
          className="parrf-fixed"
          delay={30}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
        {/* <p class="parrf-fixed">
          Siéntete especial con una asesoría personalizada de Paolo. Él te
          ayudará a encontrar el look perfecto para cualquier ocasión.
        </p> */}
      </div>
    </div>
  );
}

export default ImagenFixed2;
