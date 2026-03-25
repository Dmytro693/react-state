import Card from '../Card/Card';
import './Main.css';

function Main({ cards }) {
  return (
    <section className="main">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </section>
  );
}

export default Main;
