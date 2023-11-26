/* eslint-disable react/prop-types */
import "./SearchBar.scss";
import axios from "../../src/axiosConfig";
import SearchButton from "./SearchButton";

const SearchBar = ({ setCharacters, setTotalPage, input, setInput }) => {
  const handleClick = async () => {
    if (input) {
      await axios
        .get(`character?name=/${input}/i&limit=20`)
        .then((response) => {
          setCharacters(response?.data);
          setTotalPage(response?.data?.pages);
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    } else {
      await axios
        .get(`character?page=1&limit=8`)
        .then((response) => {
          setCharacters(response?.data);
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  };

  return (
    <div className="search-parent">
      <div className="input-wrapper">
        <input
          placeholder="by name"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <SearchButton handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
