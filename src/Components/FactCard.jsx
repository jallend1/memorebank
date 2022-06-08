const FactCard = ({ title, tags, date, source, icon, id }) => {
  return (
    <div className="fact-card">
      <div className="fact-card__header">
        <p>{date}</p>
        <p>{icon}</p>
        <p>{source}</p>
      </div>
      <div className="fact-card__body">
        <h2 className="fact-card__title">{title}</h2>
      </div>
      <div className="fact-card__footer">
        <div className="fact-card__tags">
          {tags.map((tag) => (
            <div key={tag} className="fact-card__tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactCard;
