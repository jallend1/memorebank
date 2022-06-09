import { useState } from 'react';
import { format } from 'date-fns';

const AddFactModal = (props) => {
  const { toggleModalOpen, onAddFact, onChange } = props;
  const [error, setError] = useState('');
  const [newFact, setNewFact] = useState({
    title: '',
    tags: [],
    source: '',
    icon: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setNewFact({ ...newFact, tags: value.split(',') });
    } else {
      setNewFact({ ...newFact, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    // Assigns current date and ID to new fact
    // TODO: Implement better ID generation
    const currentDate = format(Date.now(), 'MMM do, yyyy');
    const randomID = Math.floor(Math.random() * 1000000);
    const factWithDate = { ...newFact, date: currentDate, id: randomID };
    if (isValidFact(factWithDate)) {
      onAddFact(factWithDate);
    }
  };

  const isValidFact = (fact) => {
    if (fact.title.trim().length < 1) {
      setError('Title is required');
      return false;
    } else if (fact.tags.length < 1) {
      setError('Tags are required');
      return false;
    } else if (fact.source.trim().length < 1) {
      setError('Source is required');
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="add-fact-modal-container">
      <div className="add-fact-modal">
        <div className="add-fact-modal__header">
          <h1>Add Fact</h1>
        </div>
        <div className="add-fact-modal__body">
          <div className="add-fact-modal__body__inputs">
            <div className="add-fact-modal__body__inputs__title">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newFact.title}
                onChange={handleChange}
              />
            </div>
            <div className="add-fact-modal__body__inputs__tags">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={newFact.tags}
                onChange={handleChange}
              />
            </div>
            <div className="add-fact-modal__body__inputs__source">
              <label htmlFor="source">Source</label>
              <input
                type="text"
                id="source"
                name="source"
                value={newFact.source}
                onChange={handleChange}
              />
            </div>
            <div className="add-fact-modal__body__inputs__icon">
              <label htmlFor="icon">Icon</label>
              <input
                type="text"
                id="icon"
                name="icon"
                value={newFact.icon}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="add-fact-modal__footer">
          <button
            className="add-fact-modal__footer__button"
            onClick={handleSubmit}
          >
            Add Fact
          </button>
          <p className="add-fact-modal__footer__error">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default AddFactModal;
