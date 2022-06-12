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
      source: 'FACT SOURCE',
      icon: 'Apple.png',
      id: 1
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: new Date(),
      source: 'FACT SOURCE',
      icon: 'Badge.png',
      id: 2
    }
  ]);

  const [activeFacts, setActiveFacts] = useState([]);
  const [isFilteringFacts, setIsFilteringFacts] = useState(false);

  const filterFacts = (tags) => {
    setIsFilteringFacts(true);
    setActiveFacts(
      facts.filter((fact) => fact.tags.some((tag) => tags.includes(tag)))
    );
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
      <div className="fact-card-container">
        {isFilteringFacts
          ? activeFacts.map((fact) => (
              <FactCard key={fact.id} {...fact} filterFacts={filterFacts} />
            ))
          : facts.map((fact) => (
              <FactCard key={fact.id} {...fact} filterFacts={filterFacts} />
            ))}
      </div>
    </div>
  );
}

export default App;
