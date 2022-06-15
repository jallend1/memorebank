import { format } from 'date-fns';

const FactCardBack = ({ date, icon, notes, source, flipCard, Arrow }) => {
  return (
    <div className="fact-card-back">
      <div className="fact-card__header">
        <p>{format(date, 'MMM do, yyyy')}</p>
        <img
          src={require('../assets/images/icons/' + icon)}
          className="fact-card-icon"
          alt={icon.split('.')[0] + ' icon'}
        />
        <img
          src={Arrow}
          alt="Click to flip"
          onClick={flipCard}
          className="fact-card-flip"
        />
      </div>
      <div className="fact-card__body">
        <h2 onClick={flipCard}>{source}</h2>
        <p>{notes}</p>
      </div>
      <div className="fact-card__footer">
        <p>Future Footer!</p>
      </div>
    </div>
  );
};

export default FactCardBack;
