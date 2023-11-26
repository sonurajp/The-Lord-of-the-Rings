import "./SearchButton.scss";
const SearchButton = ({ handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      <span className="btn-text-one">You Shall</span>
      <span className="btn-text-two">Search!</span>
    </button>
  );
};

export default SearchButton;
