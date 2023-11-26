import { useEffect, useState } from "react";
import axios from "../../src/axiosConfig";
import SearchBar from "../components/SearchBar";
import "./Home.scss";
import CharacterCard from "../components/CharacterCard";
const Home = () => {
  const [characters, setCharacters] = useState();
  const getCharacters = async () => {
    await axios
      .get("character?page=1&limit=20")
      .then((response) => {
        setCharacters(response.data);
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
      <SearchBar setCharacters={setCharacters} />
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
    </div>
  );
};

export default Home;
