import { useState } from "react";
import "./App.css";

function App() {
  const checkWin = (board) => {
    /**
     *
     * 0 1 2
     * 3 4 5
     * 6 7 8
     *
     * winner
     * (0, 1, 2)
     * (3, 4, 5)
     * (6, 7, 8)
     *
     * (0, 3, 6)
     * (1, 4, 7)
     * (2, 5, 8)
     *
     * (0, 4, 8)
     * (2, 4, 6)
     *
     */
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (
        board[i * 3].value !== "" &&
        board[i * 3].value === board[i * 3 + 1].value &&
        board[i * 3].value === board[i * 3 + 2].value
      ) {
        return board[i * 3].value; // Winner in row i
      }

      // Check columns
      if (
        board[i].value !== "" &&
        board[i].value === board[i + 3].value &&
        board[i].value === board[i + 6].value
      ) {
        return board[i].value; // Winner in column i
      }
    }

    // Check diagonals
    if (
      board[0].value !== "" &&
      board[0].value === board[4].value &&
      board[0].value === board[8].value
    ) {
      return board[0].value; // Winner in top-left to bottom-right diagonal
    }
    if (
      board[2].value !== "" &&
      board[2].value === board[4].value &&
      board[2].value === board[6].value
    ) {
      return board[2].value; // Winner in top-right to bottom-left diagonal
    }

    // Check for a draw
    if (board.every((cell) => cell.value !== "")) {
      return "Draw"; // All cells are filled, but no winner
    }

    return null; // No winner
  };

  const [vis, setVis] = useState([
    { idx: 0, vis: false, value: "" },
    { idx: 1, vis: false, value: "" },
    { idx: 2, vis: false, value: "" },
    { idx: 3, vis: false, value: "" },
    { idx: 4, vis: false, value: "" },
    { idx: 5, vis: false, value: "" },
    { idx: 6, vis: false, value: "" },
    { idx: 7, vis: false, value: "" },
    { idx: 8, vis: false, value: "" },
  ]);

  const [turn, setTurn] = useState(false);

  const resetScore = () => {
    let tmp = [];

    for (let i = 0; i < 9; i++) {
      tmp.push({ idx: i, vis: false, value: "" });
    }
    setVis(tmp);
  };
  const handleClick = (item) => {
    if (vis[item.vis]) {
      return;
    }

    vis[item.idx] = { idx: item.idx, vis: !item.vis, value: turn ? "X" : "O" };
    setTurn(vis);

    setTurn(!turn);

    setTimeout(() => {
      let res = checkWin(vis);
      if (res) {
        alert(res);
        resetScore();
      }
    }, 200);
  };

  return (
    <div className="mainContainer">
      <h1>Tic-Tac-Toe</h1>
      <div>
        <h3>Current Turn - {turn ? "X" : "O"}</h3>
      </div>
      <div className="container">
        {vis.map((item) => {
          return (
            <div
              key={item.idx}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item.vis && item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
