import { useState } from 'react';

import Header from './Components/Header';
import FactCard from './Components/FactCard';
import AddFactModal from './Components/AddFactModal';

function App() {
  const [facts, setFacts] = useState([
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: new Date(),
      source: "It's in a book!",
      icon: 'Apple.png',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      id: 1
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: new Date(),
      source: "It's on the Google",
      icon: 'Badge.png',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      id: 2
    }
  ]);

  const [relatedCards, setRelatedCards] = useState([
    {
      title: 'Related Fact 1',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: new Date(),
      source: "It's on the Google",
      icon: 'Badge.png',
      notes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      id: 2
    }
  ]);

  const [activeFacts, setActiveFacts] = useState([]);
  const [isFilteringFacts, setIsFilteringFacts] = useState(false);
  const [isShowingRelated, setIsShowingRelated] = useState(false);

  const filterFacts = (tags) => {
    setIsFilteringFacts(true);
    setActiveFacts(
      facts.filter((fact) => fact.tags.some((tag) => tags.includes(tag)))
    );
  };

  const toggleRelated = () => {
    setIsShowingRelated(!isShowingRelated);
  };

  function importIcons(r) {
    let icons = {};
    r.keys().forEach((item) => {
      icons[item.replace('./', '')] = r(item);
    });
    return icons;
  }
  const icons = importIcons(
    require.context('./assets/images/icons', false, /\.(png|jpe?g|svg)$/)
  );

  const [isOpen, setIsOpen] = useState(false);

  const onAddFact = (fact) => {
    setFacts([...facts, fact]);
    setIsOpen(!isOpen);
  };

  const toggleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header toggleModalOpen={toggleModalOpen} />
      {isOpen && (
        <AddFactModal
          onAddFact={onAddFact}
          icons={icons}
          toggleModalOpen={toggleModalOpen}
        />
      )}
      {isFilteringFacts ? (
        <div>
          <h2>Filtered Facts</h2>
          <p onClick={() => setIsFilteringFacts(false)}>Clear Filter</p>
        </div>
      ) : null}
      <div className="fact-cards-container">
        {isFilteringFacts
          ? activeFacts.map((fact) => (
              <FactCard
                key={fact.id}
                {...fact}
                filterFacts={filterFacts}
                relatedCards={relatedCards}
                isShowingRelated={isShowingRelated}
                toggleRelated={toggleRelated}
              />
            ))
          : facts.map((fact) => (
              <FactCard
                key={fact.id}
                {...fact}
                filterFacts={filterFacts}
                relatedCards={relatedCards}
                isShowingRelated={isShowingRelated}
                toggleRelated={toggleRelated}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
