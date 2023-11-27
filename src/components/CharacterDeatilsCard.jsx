/* eslint-disable react/prop-types */
import "./CharacterDeatilsCard.scss";
const CharacterDeatilsCard = ({ characterDetails }) => {
  return (
    <>
      <div className="card">
        <p className="header">{characterDetails?.name}</p>
        <p className="second-text">
          Gender:{characterDetails?.gender ? characterDetails?.gender : "N/A"}
        </p>
        <p className="second-text">
          Birth:{characterDetails?.birth ? characterDetails?.birth : "N/A"}
        </p>
        <p className="second-text">
          Death:{characterDetails?.death ? characterDetails?.death : "N/A"}
        </p>
        <p className="second-text">
          Hair:{characterDetails?.hair ? characterDetails?.hair : "N/A"}
        </p>
        <p className="second-text">
          Height:{characterDetails?.height ? characterDetails?.height : "N/A"}
        </p>
        <p className="second-text">
          Race:{characterDetails?.race ? characterDetails?.race : "N/A"}
        </p>
        <p className="second-text">
          Realm:{characterDetails?.realm ? characterDetails?.realm : "N/A"}
        </p>
        <p className="second-text">
          Spouse:{characterDetails?.spouse ? characterDetails?.spouse : "N/A"}
        </p>
        <p className="second-text">
          Wiki:
          <a href={characterDetails?.wikiUrl}>{characterDetails?.wikiUrl}</a>
        </p>
      </div>
      <svg className="filter">
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
        </filter>
      </svg>
    </>
  );
};

export default CharacterDeatilsCard;
