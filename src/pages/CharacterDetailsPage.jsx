import { useCallback, useEffect, useState } from "react";
import axios from "../../src/axiosConfig";

import "./CharacterDetailsPage.scss";
import { useParams } from "react-router-dom";
import CharacterDeatilsCard from "../components/CharacterDeatilsCard";
const CharacterDetailsPage = () => {
  const [charcterDetails, setCharacterDetails] = useState();
  const { id } = useParams();
  const getCharacterDetails = useCallback(async () => {
    await axios
      .get(`character/${id}`)
      .then((response) => {
        setCharacterDetails(response?.data?.docs[0]);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, [id]);
  useEffect(() => {
    getCharacterDetails();
  }, [getCharacterDetails]);
  return (
    <div className="character-page-wrapper ">
      <CharacterDeatilsCard characterDetails={charcterDetails} />
    </div>
  );
};

export default CharacterDetailsPage;
