import BotonFixed from "./Components/BotonFixed";
import Cabecera from "./Components/Cabecera";
import Video from "./Components/Video";
import ServiciosDestacados from "./Components/ServiciosDestacados";
import ImagenFixed from "./Components/ImagenFixed";
import Presentacion from "./Components/Presentacion";
import ContainerCard from "./Components/ContainerCard";
import ImagenFixed2 from "./Components/ImagenFixed2";
import Image from "./Components/Image";
import Redes from "./Components/Redes";
import Contacto from "./Components/Contacto";
import { FondoAnimado } from "./Components/FondoAnimado";

function Home() {
  return (
    <>
      <FondoAnimado />
      <BotonFixed />

      <Cabecera />

      <Video />

      <Presentacion />

      <ImagenFixed />

      <ServiciosDestacados />

      <ContainerCard />

      <ImagenFixed2 />

      <Image />

      <Redes />

      <Contacto />
    </>
  );
}

export default Home;
