
import styles from "./Square.module.css";



function Square({value , onSquareClick}){
    
    return (
        <>
            <button className={styles.squareStyle} onClick={onSquareClick}>
               {value}
            </button>
        </>
    )
}

export default Square;