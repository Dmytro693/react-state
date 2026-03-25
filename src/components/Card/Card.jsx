import './Card.css';

function Card({ title, description, image }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <button className="card__button" onClick={handleClick}>
          Дізнатися більше
        </button>
      </div>
    </article>
  );
}

export default Card;
