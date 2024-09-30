import Player from "./Player";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({onSelectSquare, turns, gameBoard}) {

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}  disabled={playerSymbol ? true : false}>
                  {playerSymbol}
                  </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
