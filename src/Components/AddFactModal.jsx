import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddFactModal = (props) => {
  const { toggleModalOpen, onAddFact, onChange, icons } = props;
  const [error, setError] = useState('');
  const [newFact, setNewFact] = useState({
    title: '',
    tags: [],
    source: '',
    icon: 'Random'
  });

  const iconNames = Object.keys(icons);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      setNewFact({ ...newFact, tags: value.split(',') });
    } else {
      setNewFact({ ...newFact, [name]: value });
    }
  };

  const assignRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * iconNames.length);
    return iconNames[randomIndex];
  };

  const handleSubmit = (e) => {
    // Assigns current date and ID to new fact
    const currentDate = new Date();
    const randomID = uuidv4();
    const factIcon =
      newFact.icon === 'Random' ? assignRandomIcon() : newFact.icon;
    const factWithDate = {
      ...newFact,
      date: currentDate,
      id: randomID,
      icon: factIcon
    };
    setNewFact(factWithDate);
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
          <h1>New Fact</h1>
        </div>
        <div className="add-fact-modal__body">
          <div className="add-fact-modal__body__inputs">
            <div className="add-fact-modal__body__inputs__title">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={newFact.title}
                onChange={handleChange}
              />
            </div>
            <div className="add-fact-modal__body__inputs__tags">
              <input
                type="text"
                id="tags"
                name="tags"
                value={newFact.tags}
                onChange={handleChange}
                placeholder="Tags"
              />
            </div>
            <div className="add-fact-modal__body__inputs__source">
              <input
                type="text"
                id="source"
                name="source"
                value={newFact.source}
                onChange={handleChange}
                placeholder="Fact Source"
              />
            </div>
            <div className="add-fact-modal__body__inputs__icon">
              <select
                id="icon"
                name="icon"
                value={newFact.icon}
                onChange={handleChange}
              >
                <option value="Random">Random Icon</option>
                {iconNames.map((icon) => {
                  const iconName = icon.split('.')[0];
                  return (
                    <option key={icon} value={icon}>
                      {iconName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="add-fact-modal__footer">
          <p className="add-fact-modal__footer__error">{error}</p>
          <button
            className="add-fact-modal__footer__button"
            onClick={handleSubmit}
          >
            Add Fact
          </button>
          <button
            onClick={toggleModalOpen}
            className="add-fact-modal__exit-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFactModal;
