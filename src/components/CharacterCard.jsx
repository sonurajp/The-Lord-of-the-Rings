import "./CharacterCard.scss";

const CharacterCard = ({ characters }) => {
  return (
    <div className="card-parent card">
      <p className="tip">{characters?.name}</p>
      <p className="second-text">Race:{characters?.name}</p>
      <p className="second-text">Gender:{characters?.gender}</p>
    </div>
  );
};

export default CharacterCard;
