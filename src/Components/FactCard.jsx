const FactCard = () => {
  return (
    <div className="fact-card">
      <div className="fact-card__header">
        <p>JUN 08 2022</p>
        <p>related icon</p>
        <p>source</p>
      </div>
      <div className="fact-card__body">
        <h2 className="fact-card__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        {/* <p className="fact-card__text">FACT SOURCE</p> */}
      </div>
      <div className="fact-card__footer">
        <div className="fact-card__tags">
          <div className="fact-card__tag">Lorem</div>
          <div className="fact-card__tag">Ipsum</div>
          <div className="fact-card__tag">Dolor</div>
        </div>
      </div>
    </div>
  );
};

export default FactCard;
