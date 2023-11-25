import { useEffect } from "react";
import axios from "../../src/axiosConfig";
import SearchBar from "../components/SearchBar";
import "./Home.scss";
const Home = () => {
  useEffect(() => {
    axios
      .get("character")
      .then((response) => {
        console.log("API response:", response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);
  return (
    <>
      <div className="home-parent-page">
        <p>Characters</p>
      </div>
      <SearchBar />
    </>
  );
};

export default Home;
