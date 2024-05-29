const GameBoard = ({ onSelectSquare, board }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const selectHandler = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     // const updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
  //     const updatedBoard = structuredClone(prevGameBoard);
  //     updatedBoard[rowIndex][colIndex] = { activePlayerSymbol };
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
