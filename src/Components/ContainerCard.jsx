import Card from "./Card";
import "./ContainerCard.css";

function ContainerCard() {
  return (
    <div className="contenedor">
      <h1 className="title-section-2"></h1>
      <section className="section-2">
        <Card />
      </section>
    </div>
  );
}

export default ContainerCard;
