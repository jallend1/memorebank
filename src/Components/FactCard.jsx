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
  const [isShowingRelated, setIsShowingRelated] = useState(false);

  const [relatedCards, setRelatedCards] = useState([
    {
      title: 'Related Fact 1',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: new Date(),
      source: "It's on the Google",
      icon: 'Badge.png',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      id: 20
    }
  ]);

  const toggleRelated = () => {
    setIsShowingRelated(!isShowingRelated);
  };

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
      <button onClick={toggleRelated}>Show Related</button>
      {isShowingRelated && (
        <FactCardFront
          title={relatedCards[0].title}
          date={relatedCards[0].date}
          tags={relatedCards[0].tags}
          filterFacts={filterFacts}
          flipCard={flipCard}
          icon={relatedCards[0].icon}
          Arrow={Arrow}
        />
      )}
    </div>
  );
};

export default FactCard;
