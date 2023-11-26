import { useEffect, useState } from "react";
import axios from "../../src/axiosConfig";
import SearchBar from "../components/SearchBar";
import "./Home.scss";
import CharacterCard from "../components/CharacterCard";
import ReactPaginate from "react-paginate";
const Home = () => {
  const [characters, setCharacters] = useState();
  const [totalPage, setTotalPage] = useState(0);
  const pageClick = async (page) => {
    let pageAdd = page.selected + 1;
    await axios
      .get(`character?page=${pageAdd}&limit=20`)
      .then((response) => {
        setCharacters(response?.data);
        setTotalPage(response?.data?.pages);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const getCharacters = async () => {
    await axios
      .get("character?page=1&limit=20")
      .then((response) => {
        setCharacters(response?.data);
        setTotalPage(response?.data?.pages);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="home-parent-page">
      <div className="heading-wrapper">
        <p>Characters</p>
      </div>
      <SearchBar setCharacters={setCharacters} setTotalPage={setTotalPage} />
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
    </div>
  );
};

export default Home;
