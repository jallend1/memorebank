import FactCard from './Components/FactCard';

function App() {
  const facts = [
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
  ];
  return (
    <div className="App">
      {facts.map((fact) => (
        <FactCard key={fact.id} {...fact} />
      ))}
    </div>
  );
}

export default App;
