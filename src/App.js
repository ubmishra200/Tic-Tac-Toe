import './App.css';
import { useState } from 'react';

function App() {
  const [click, change] = useState(Array(9).fill(''));
  const [move, Setmove] = useState('X');

  const handleclick = (n) => {
    let square = [...click];
    if (square[n] !== '') {
      return;
    }
    square[n] = move;
    change(square);

    if (move === 'X') {
      Setmove('O');
    } else {
      Setmove('X');
    }

    const isWin = checkwin(square);
    if (isWin) {
      alert(`Player ${move} wins!`);
      // You may want to reset the game here
      
    }
  };

  const checkwin = (board) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of conditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };
  const btnclick=()=>{
    change(Array(9).fill(''));
    Setmove('X');
   
  };
  const isDraw = () => {
    return click.every((square) => square !== '') && !checkwin(click);
  };


  return (
    <div className="App">
      <h1>Tic Tac Toe </h1>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td onClick={() => { handleclick(0) }}>{click[0]} </td>
              <td onClick={() => { handleclick(1) }}>{click[1]} </td>
              <td onClick={() => { handleclick(2) }}>{click[2]}</td>
            </tr>
            <tr>
              <td onClick={() => { handleclick(3) }}>{click[3]} </td>
              <td onClick={() => { handleclick(4) }}>{click[4]}</td>
              <td onClick={() => { handleclick(5) }}>{click[5]}</td>
            </tr>
            <tr>
              <td onClick={() => { handleclick(6) }}>{click[6]} </td>
              <td onClick={() => { handleclick(7) }}>{click[7]}</td>
              <td onClick={() => { handleclick(8) }}>{click[8]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={()=>{btnclick()}}>Reset</button>
      {isDraw() && <div className='drawfor'>It's a draw!</div> }
      <h3>YuVi Mishra</h3>
    </div>
  );
}

export default App;
