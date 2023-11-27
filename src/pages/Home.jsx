import { useCallback, useEffect, useState } from "react";
import axios from "../../src/axiosConfig";
import SearchBar from "../components/SearchBar";
import "./Home.scss";
import CharacterCard from "../components/CharacterCard";
import ReactPaginate from "react-paginate";
import PageLimit from "../components/PageLimit";
import Filter from "../components/Filter";

const Home = () => {
  const [characters, setCharacters] = useState();
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [input, setInput] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "asc",
    gender: "",
    race: "",
  });
  const pageClick = async (page) => {
    let pageAdd = page.selected + 1;
    setCurrentPage(pageAdd);
    await axios

      .get(
        `character?sort=name:${filters.sort}&race=${filters.race}&gender=${filters.gender}&page=${pageAdd}&limit=${limit}`
      )
      .then((response) => {
        setCharacters(response?.data);
        setTotalPage(response?.data?.pages);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const getCharacters = useCallback(async () => {
    await axios
      .get(
        `character?sort=name:${filters.sort}&race=${filters.race}&gender=${filters.gender}&page=${currentPage}&limit=${limit}`
      )
      .then((response) => {
        setCharacters(response?.data);
        setTotalPage(response?.data?.pages);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, [limit, currentPage, filters]);
  useEffect(() => {
    getCharacters();
  }, [limit, getCharacters]);

  return (
    <div className="home-parent-page">
      <div className="heading-wrapper">
        <p>Characters</p>
      </div>
      <div className="search-filter-wrapper">
        <SearchBar
          input={input}
          setInput={setInput}
          setCharacters={setCharacters}
          setTotalPage={setTotalPage}
          filters={filters}
          limit={limit}
          currentPage={currentPage}
        />
        <Filter
          input={input}
          setCharacters={setCharacters}
          limit={limit}
          currentPage={currentPage}
          setTotalPage={setTotalPage}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      {characters?.docs?.length > 0 ? (
        <div className="card-parent ">
          {characters?.docs?.map((info) => (
            <CharacterCard key={info?._id} characters={info} />
          ))}
        </div>
      ) : (
        <div className="not-found">
          <p>
            <strong>No characters found.</strong>
          </p>
          <div className="quote">
            <blockquote>Not all those who wander are lost.</blockquote>
            <cite className="author">― Bilbo Baggins</cite>
          </div>
        </div>
      )}
      <div className="pagination-wrapper">
        {characters?.docs?.length > 0 && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={pageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        )}
        <div className="limit-wrapper">
          <PageLimit setLimit={setLimit} />
        </div>
      </div>
    </div>
  );
};

export default Home;
