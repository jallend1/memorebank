import { useState } from 'react';
import { format } from 'date-fns';

const FactCard = ({ title, tags, date, source, icon, filterFacts, id }) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="fact-card-container">
      <div className={isCardFlipped ? 'fact-card fact-card-flip' : 'fact-card'}>
        <div className="fact-card-front">
          <div className="fact-card__header">
            <p>{format(date, 'MMM do, yyyy')}</p>
            <img
              src={require('../assets/images/icons/' + icon)}
              className="fact-card-icon"
              alt={icon.split('.')[0] + ' icon'}
            />
            <p onClick={flipCard}>See Source</p>
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
        <div className="fact-card-back">
          <h1 onClick={flipCard}>{source}</h1>
        </div>
      </div>
    </div>
  );
};

export default FactCard;
