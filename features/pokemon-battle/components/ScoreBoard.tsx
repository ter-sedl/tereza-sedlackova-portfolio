import { useContext } from "react";
import { GameContext } from "../context/GameContext"
import styles from "./ScoreBoarder.module.css"

function ScoreBoard() {

    const gameState = useContext(GameContext);
    const enemyName = gameState?.enemy?.name;
    const doubleDmgTypes = gameState?.enemy?.defeatedBy.join(", ");
    const hiddenContent = `${enemyName} dostává dvojé poškození od ${doubleDmgTypes} `;
    const gameStatus = gameState?.status;

    const resultWon = <h2>Vítězství</h2>;
    const resultLost = <h2>Prohra</h2>
    const howToPlay = <h3>Podle typu vyber nejsilnějšího šampiona</h3>

    const statusContent = {
        playing: howToPlay,
        won: resultWon,
        lost: resultLost,
    };



    return (
        <div className={styles.scoreBoard}>
            <div>{gameStatus ? statusContent[gameStatus] : "Prosím o strpení"}</div>
            <div 
            className={`
                ${styles.help}
                ${gameStatus === "playing" ? styles.hide : ""}`}
            >
                <span className={styles.helpIcon}>?</span>
                <div className={styles.helpTooltip}>
                    {hiddenContent}
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard

// ${gameStatus === "playing" ? "" : styles.hide}