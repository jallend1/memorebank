import { format } from 'date-fns';

const FactCardFront = ({
  date,
  icon,
  title,
  tags,
  flipCard,
  filterFacts,
  Arrow
}) => {
  return (
    <div className="fact-card-front">
      <div className="fact-card__header">
        <p>{format(date, 'MMM do, yyyy')}</p>
        <img
          src={require('../assets/images/icons/' + icon)}
          className="fact-card-icon"
          alt={icon.split('.')[0] + ' icon'}
        />
        <img src={Arrow} alt="Click to flip" onClick={flipCard} />
      </div>
      <div className="fact-card__body">
        <h2 className="fact-card__title">{title}</h2>
      </div>
      <div className="fact-card__footer">
        <div className="fact-card__tags">
          {tags.map((tag) => (
            <div
              key={tag}
              className="fact-card__tag"
              onClick={() => filterFacts(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactCardFront;
