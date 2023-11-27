/* eslint-disable react/prop-types */
import "./SearchBar.scss";
import axios from "../../src/axiosConfig";
import SearchButton from "./SearchButton";

const SearchBar = ({
  setCharacters,
  setTotalPage,
  input,
  setInput,
  limit,
  filters,
  currentPage,
}) => {
  const handleClick = async () => {
    const url = input
      ? `character?name=/${input}/i&limit=20`
      : `character?sort=name:${filters.sort}&race=${filters.race}&gender=${filters.gender}&limit=${limit}`;

    await axios
      .get(url)
      .then((response) => {
        setCharacters(response?.data);
        setTotalPage(response?.data?.pages);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="search-parent">
      <div className="input-wrapper">
        <input
          placeholder="by name"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <SearchButton handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
