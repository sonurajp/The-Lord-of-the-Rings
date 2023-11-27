/* eslint-disable react/prop-types */
import axios from "../../src/axiosConfig";
import "./Filter.scss";
import { gender, race, sort } from "../assets/Utils/constant";

const Filter = ({
  setCharacters,
  limit,
  input,
  currentPage,
  setTotalPage,
  filters,
  setFilters,
}) => {
  const handleChange = (value, key) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleClick = async () => {
    const url = input
      ? `character?sort=name:${filters.sort}&race=${filters.race}&gender=${filters.gender}&name=/${input}/i&page=${currentPage}&limit=${limit}`
      : `character?sort=name:${filters.sort}&race=${filters.race}&gender=${filters.gender}&page=${currentPage}&limit=${limit}`;

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

  return (
    <div className="filter-wrapper">
      <div className="drop-down">
        <label className="dropdown">Sort:</label>
        <select
          className="dropdown"
          name="dropdown"
          onChange={(e) => handleChange(e.target.value, "sort")}
        >
          {sort?.map((data) => (
            <option value={data?.value} key={data?.value}>
              {data?.label}
            </option>
          ))}
        </select>
      </div>
      <div className="drop-down">
        <label className="dropdown">Race:</label>
        <select
          className="dropdown"
          name="dropdown"
          onChange={(e) => handleChange(e.target.value, "race")}
        >
          {race?.map((data) => (
            <option value={data?.value} key={data?.value}>
              {data?.label}
            </option>
          ))}
        </select>
      </div>
      <div className="drop-down">
        <label className="dropdown">Gender:</label>
        <select
          className="dropdown"
          name="dropdown"
          onChange={(e) => handleChange(e.target.value, "gender")}
        >
          {gender?.map((data) => (
            <option value={data?.value} key={data?.value}>
              {data?.label}
            </option>
          ))}
        </select>
      </div>
      <button className="filter-button" onClick={handleClick}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
