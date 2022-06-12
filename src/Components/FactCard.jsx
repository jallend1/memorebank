import { useState } from 'react';
import { format } from 'date-fns';

const FactCard = ({ title, tags, date, source, icon, id }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="fact-card">
      <div className="fact-card__header">
        {!isFlipped ? (
          <>
            <p>{format(date, 'MMM do, yyyy')}</p>
            <img
              src={require('../assets/images/icons/' + icon)}
              className="fact-card-icon"
              alt={icon.split('.')[0] + ' icon'}
            />
            <p onClick={flipCard}>See Source</p>
          </>
        ) : (
          <div className="fact-card-source-header">
            <p>{source}</p>
            <p onClick={flipCard}>Back</p>
          </div>
        )}
      </div>
      <div className="fact-card__body">
        <h2 className="fact-card__title">{title}</h2>
      </div>
      <div className="fact-card__footer">
        <div className="fact-card__tags">
          {tags.map((tag) => (
            <div key={tag} className="fact-card__tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactCard;
