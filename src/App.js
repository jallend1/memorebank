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
      icon: 'icon',
      id: 1
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: new Date(),
      source: 'FACT SOURCE',
      icon: 'icon',
      id: 2
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const onAddFact = (fact) => {
    setFacts([...facts, fact]);
    setIsOpen(false);
  };

  const toggleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header toggleModalOpen={toggleModalOpen} />
      {isOpen && <AddFactModal onAddFact={onAddFact} />}
      <div className="fact-card-container">
        {facts.map((fact) => (
          <FactCard key={fact.id} {...fact} />
        ))}
      </div>
    </div>
  );
}

export default App;
