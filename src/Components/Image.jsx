import WSPGallery from "./WSPGallery";
import "./Galeria.css";

function Image() {
  const galleryImages = [
    {
      img: "2.png",
    },
    {
      img: "3.png",
    },
    {
      img: "6.png",
    },
    {
      img: "7.png",
    },
    {
      img: "8.png",
    },
    {
      img: "9.png",
    },
    {
      img: "10.png",
    },
    {
      img: "11.png",
    },
  ];

  return (
    <>
      <h1 class="title-image">Mis Trabajos</h1>
      <h3 class="mini-descripcion">
        Una Pequeña demostracion sobre mi Portafolio de trabajos
      </h3>
      <div id="Galeria" className="App">
        <WSPGallery galleryImages={galleryImages} />
      </div>
    </>
  );
}

export default Image;
