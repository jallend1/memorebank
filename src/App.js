import { useState } from 'react';

import Header from './Components/Header';
import FactCard from './Components/FactCard';
import AddFactModal from './Components/AddFactModal';

function App() {
  const [facts, setFacts] = useState([
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: 'JUN 08 2022',
      source: 'FACT SOURCE',
      icon: 'source',
      id: 1
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: ['Lorem', 'Ipsum', 'Dolor'],
      date: 'JUN 01 2022',
      source: 'FACT SOURCE',
      icon: 'source',
      id: 2
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const onAddFact = (fact) => {
    setFacts([...facts, fact]);
    setIsOpen(false);
    console.log(facts);
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
