import { useState } from "react";

type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className=" border border-solid w-20 h-20" onClick={onSquareClick}>
      {value}
    </button>
  );
}

type BoardProps = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  return (
    <>
      <div>status</div>
      <div>
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div>
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div>
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

export function Game() {
  const [history, setHistory] = useState(Array(9).fill(Array(9).fill(null)));
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const onPlay = (nextSquares: string[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={onPlay} />
      </div>
    </div>
  );
}
