import { useState } from 'react';
import Arrow from '../assets/images/arrow.png';
import FactCardFront from './FactCardFront';
import FactCardBack from './FactCardBack';

const FactCard = ({
  title,
  tags,
  date,
  source,
  icon,
  notes,
  filterFacts,
  id
}) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <div className="fact-card-container">
      <div className={isCardFlipped ? 'fact-card fact-card-flip' : 'fact-card'}>
        <FactCardFront
          title={title}
          tags={tags}
          date={date}
          filterFacts={filterFacts}
          flipCard={flipCard}
          icon={icon}
          Arrow={Arrow}
        />
        <FactCardBack
          date={date}
          icon={icon}
          notes={notes}
          source={source}
          flipCard={flipCard}
          Arrow={Arrow}
        />
      </div>
    </div>
  );
};

export default FactCard;
