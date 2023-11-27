/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ characters }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <p className="tip">{characters?.name}</p>
      <div className="sub">
        <p className="second-text">
          Race: {characters?.name ? characters?.name : "N/A"}
        </p>
        <p className="second-text">
          Gender: {characters?.gender ? characters?.gender : "N/A"}
        </p>
      </div>
      <span onClick={() => navigate(`/character/${characters?._id}`)}>
        click for more details {">>"}
      </span>
    </div>
  );
};

export default CharacterCard;
