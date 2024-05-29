import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const clickHandler = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  let editPlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={changeHandler} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player ">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{btnCaption}</button>
    </li>
  );
};

export default Player;
