import Card from "./Card";
import "./ContainerCard.css";

function ContainerCard() {
  return (
    <div class="contenedor">
      <h1 class="title-section-2">Servicios Destacados</h1>
      <section class="section-2">
        <Card />
      </section>
    </div>
  );
}

export default ContainerCard;
