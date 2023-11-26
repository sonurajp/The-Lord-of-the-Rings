/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "../../src/axiosConfig";
import "./Filter.scss";

const Filter = ({ setCharacters, limit, input, currentPage, setTotalPage }) => {
  const [filters, setFilters] = useState({
    sort: "asc",
    gender: "",
    race: "",
  });
  const sort = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];
  const race = [
    { label: "Any", value: "" },
    { label: "Hobbit", value: "Hobbit" },
    { label: "Human", value: "Human" },
    { label: "Orc", value: "Orc" },
  ];

  const gender = [
    { label: "Any", value: "" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const handleChange = (value, key) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleClick = async () => {
    const url = input
      ? `character?sort=character:${filters.sort}&race=${filters.race}&gender=${filters.gender}&name=/${input}/i&page=${currentPage}&limit=${limit}`
      : `character?sort=character:${filters.sort}&race=${filters.race}&gender=${filters.gender}&page=${currentPage}&limit=${limit}`;

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
