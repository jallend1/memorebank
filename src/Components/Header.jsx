const Header = ({ toggleModalOpen, isOpen }) => {
  return (
    <header className="main-header">
      <div className="main-header__logo">
        <h1>Memor eBank</h1>
      </div>
      <div>
        <button className="add-fact-button" onClick={toggleModalOpen}>
          {isOpen ? 'Cancel New Fact' : 'Create New Fact'}
        </button>
      </div>
      <div className="main-header__nav">
        <a href="#" className="main-header__nav__item">
          Login
        </a>
        <a href="#" className="main-header__nav__item">
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
