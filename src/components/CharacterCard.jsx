/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ characters }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card-parent card"
      onClick={() => navigate(`/character/${characters?._id}`)}
    >
      <p className="tip">{characters?.name}</p>
      <p className="second-text">Race:{characters?.name}</p>
      <p className="second-text">Gender:{characters?.gender}</p>
    </div>
  );
};

export default CharacterCard;
