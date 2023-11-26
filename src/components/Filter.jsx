/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "../../src/axiosConfig";
import "./Filter.scss";

const Filter = ({ setCharacters, limit, input, currentPage, setTotalPage }) => {
  const [filters, setFilters] = useState({
    sort: "asc",
    gender: "male",
    race: "hobbit",
  });
  const sort = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];
  const race = [
    { label: "Hobbit", value: "hobbit" },
    { label: "Human", value: "human" },
    { label: "Orc", value: "orc" },
    { label: "Goblin", value: "goblin" },
  ];
  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const handleChange = (value, key) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleClick = async () => {
    const url = input
      ? `character?sort=character:${filters.sort}&race=/${filters.race}/i&name=/${input}/i&page=${currentPage}&limit=${limit}`
      : `character?sort=character:${filters.sort}&race=/${filters.race}/i&page=${currentPage}&limit=${limit}`;

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
