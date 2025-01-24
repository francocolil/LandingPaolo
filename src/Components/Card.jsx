import { useState } from "react";
import "./Card.css";

const cards = [
  {
    id: 1,
    title: "Barberia",
    content:
      "Corte de Cabello, lavar y peinar el cabello, Recortar barbas, Asesorar sobre el cuidado personal y estético, Realizar tratamientos faciales, Diseñar el cabello y la barba.",
    image: "./Background.jpg",
  },
  {
    id: 2,
    title: "Maquillaje",
    content:
      "Limpiar e hidratar la piel, Aplicar prebase, Extender la base de maquillaje, Corregir las ojeras, Sella la base con polvos, Aplicar polvos bronceadores, Maquillar los ojos, Extiende colorete en las mejillas",
    image: "./Background.jpg",
  },
  {
    id: 3,
    title: "Clases de Peluqueria",
    content:
      "En las clases de peluquería, los alumnos aprenden a realizar diferentes tareas para el cuidado y embellecimiento del cabello. Entre ellas, se encuentran.",
    image: "./Background.jpg",
  },
  {
    id: 4,
    title: "Cambio de Color Capilar",
    content:
      "Para teñir el cabello, se aplica una mezcla de tinte y activador, que puede incluir amoniaco, etanolamina, agua oxigenada o parafenilendiamina. El tinte puede ser permanente o temporal.",
    image: "./Background.jpg",
  },
  {
    id: 5,
    title: "Estilista",
    content:
      "potenciar la imagen personal y asesorar al cliente, aplicar técnicas de peluquería para el cuidado y embellecimiento del cabello, proyectando un cambio de imagen favorable para el/la cliente, trabajando siempre en condiciones de calidad y seguridad e higiene.",
    image: "/public/Background.jpg",
  },
];

function Card() {
  const [cartas, setCartas] = useState(cards);
  return (
    <>
      {cartas.map(({ title, id, content, image }) => {
        return (
          <section key={id} class="contenedor">
            <div class="card diplay-flex">
              <img src={image} alt="" />
              <div class="card-body">
                <h1>{title}</h1>
                <p class="card-text">{content}</p>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Card;
