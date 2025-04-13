import { useState } from "react"
import { useBoardState } from "../store/gameStore.ts"

type ButtonProps = {
  token: string | null
  onClick: () => void
}

export const Cell = ({ token, onClick }: ButtonProps) => {
  return (
    <button
      className={"w-6 h-6 border-1 flex items-center justify-center"}
      onClick={onClick}
    >
      {token}
    </button>
  )
}

type BoardProps = {
  onPlay: () => void
  currentToken: string
}

export const Board = ({ onPlay, currentToken }: BoardProps) => {
  const { cells, setCell } = useBoardState()

  const onCellClick = (row: number, column: number) => {
    if (cells[row][column]) {
      return
    }
    setCell(row, column, currentToken)
    onPlay()
  }

  return (
    <div className="inline-block border-2 border-gray-600 rounded-md p-1 bg-gray-50">
      {cells.map((row, i) => {
        return (
          <div key={i} className={"flex"}>
            {row.map((text, j) => {
              return (
                <Cell
                  token={text}
                  onClick={() => {
                    onCellClick(i, j)
                  }}
                  key={i + j}
                ></Cell>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export const Game = () => {
  const [currentToken, setCurrentToken] = useState("O")
  const { winner, setWinner } = useBoardState()

  const checkWinner = () => {
    return "X"
  }

  const onPlay = () => {
    const w = checkWinner()
    if (w) {
      setWinner(w)
    }

    setCurrentToken(currentToken === "X" ? "O" : "X")
  }

  return (
    <>
      {winner && <h1>Winner is {winner}</h1>}
      <Board onPlay={onPlay} currentToken={currentToken} />
    </>
  )
}
