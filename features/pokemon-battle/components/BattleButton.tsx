'use client'

import { useContext } from "react";
import styles from "./BattleButton.module.css";
import { GameContext } from "../context/GameContext";
import type { BattleButtonType } from "../types/gameTypes";



function BattleButton({ handleResults, prepareGame }: BattleButtonType) {

    const gameState = useContext(GameContext);
    const hasSelectedPokemon = gameState?.selectedPokemon !== null
        && gameState?.selectedPokemon !== undefined;

    const gameStatus = gameState?.status;

    const contentPlaying = <>⚔️<br /> Souboj </>;

    const contentNext = <>⟳<br /> Znovu </>;


    return (
        <button
            className={`
                 ${styles.battleButton}
                 ${hasSelectedPokemon ? styles.active : ""}
                 ${gameStatus === "playing" ? "" : styles.next}
        `}
            disabled={hasSelectedPokemon ? false : true}
            onClick={gameStatus === "playing" ? handleResults : prepareGame}
        >
            {gameStatus === "playing" ? contentPlaying : contentNext}
        </button>
    )
}
export default BattleButton