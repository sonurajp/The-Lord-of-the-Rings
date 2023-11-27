import { useCallback, useEffect, useState } from "react";
import axios from "../../src/axiosConfig";

import "./CharacterDetailsPage.scss";
import { useParams } from "react-router-dom";
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
    <div className="character-page-parent">
      <p className="header">{charcterDetails?.name}</p>
      <div className="content-wrapper">
        <p className="second-text">
          Name:{charcterDetails?.name ? charcterDetails?.name : "N/A"}
        </p>
        <p className="second-text">
          Gender:{charcterDetails?.gender ? charcterDetails?.gender : "N/A"}
        </p>
        <p className="second-text">
          Birth:{charcterDetails?.birth ? charcterDetails?.birth : "N/A"}
        </p>
        <p className="second-text">
          Death:{charcterDetails?.death ? charcterDetails?.death : "N/A"}
        </p>
        <p className="second-text">
          Hair:{charcterDetails?.hair ? charcterDetails?.hair : "N/A"}
        </p>
        <p className="second-text">
          Height:{charcterDetails?.height ? charcterDetails?.height : "N/A"}
        </p>
        <p className="second-text">
          Race:{charcterDetails?.race ? charcterDetails?.race : "N/A"}
        </p>
        <p className="second-text">
          Realm:{charcterDetails?.realm ? charcterDetails?.realm : "N/A"}
        </p>
        <p className="second-text">
          Spouse:{charcterDetails?.spouse ? charcterDetails?.spouse : "N/A"}
        </p>
        <p className="second-text">
          Wiki:
          <a href={charcterDetails?.wikiUrl}>{charcterDetails?.wikiUrl}</a>
        </p>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
