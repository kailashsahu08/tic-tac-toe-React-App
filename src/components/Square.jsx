
import styles from "./Square.module.css";



function Square({value , onSquareClick}){
    
    return (
        <>
            <button className={`${styles.squareStyle} ${styles.button}`} onClick={onSquareClick}>
               {value}
            </button>
        </>
    )
}

export default Square;