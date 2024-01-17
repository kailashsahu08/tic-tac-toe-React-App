import styles from "./Board.module.css";
import { useState } from "react";
import Square from "./Square";

const Board = () =>{
    const [xIsNext, setXIsNext] = useState(true);
    const [square,setValues] = useState(Array(9).fill(null));
    function handleClick(i) {
        if (square[i] || calculateWinner(square)) {
            return;
        }
        const nextSquares = square.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setValues(nextSquares);
        setXIsNext(!xIsNext);
    }
    const winner = calculateWinner(square);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if(square.includes(null)){
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    } else {
        status = 'Match Draw';
    }
    //refresh button function
    function refresh(){
        const i = Array(9).fill(null);
        setValues(i);
        setXIsNext(true);
    }
    return (
        <>
            <h2 className={styles.header_element}>{status}</h2>
            <div className={styles.board_element}>
                <Square value={square[0]} onSquareClick={() => handleClick(0)}></Square>
                <Square value={square[1]} onSquareClick={() => handleClick(1)}></Square>
                <Square value={square[2]} onSquareClick={() => handleClick(2)}></Square>

                <Square value={square[3]} onSquareClick={() => handleClick(3)}></Square>
                <Square value={square[4]} onSquareClick={() => handleClick(4)}></Square>
                <Square value={square[5]} onSquareClick={() => handleClick(5)}></Square>

                <Square value={square[6]} onSquareClick={() => handleClick(6)}></Square>
                <Square value={square[7]} onSquareClick={() => handleClick(7)}></Square>
                <Square value={square[8]} onSquareClick={() => handleClick(8)}></Square>

            </div>
            <button className={styles.refresh_button} onClick={()=>refresh()}>Refresh</button>
        </>
    )
    }
function calculateWinner(square){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(square[a] && square[a]===square[b] && square[b]===square[c]){
            return square[a];
        }
    }
    return null;
}
export default Board;