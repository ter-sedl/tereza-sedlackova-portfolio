import Card from "./Card"
import styles from "./BattleField.module.css";
import BattleButton from "./BattleButton";
import type { BattleFieldProps } from "../types/gameTypes";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

function BattleField({
    enemy,
    selectedPokemon,
    onDrop,
    dragging,
    handleResults,
    prepareGame,
}: BattleFieldProps) {


    const gameState = useContext(GameContext);
    const status = gameState?.status;

    return (
        <div className={styles.battleField}>
            <div
                className={`${styles.cardHolder}
                ${dragging ? styles.dragging : ""}`}
                onDragOver={(event) => event.preventDefault()}
                onDrop={onDrop}
            >
                {selectedPokemon ? (
                    <Card
                        name={selectedPokemon.name}
                        types={selectedPokemon.types}
                        image={selectedPokemon.image}
                        hasHoover={false}
                        afterGameDisable={status === "lost" ? true : false}
                        size="large"
                    />
                ) : (
                    "Přetáhni sem svého pokemona"
                )}
            </div>
            {/* <Card/> */}
            <BattleButton 
            handleResults={handleResults} 
            prepareGame={prepareGame} />
            {
                enemy && (<Card
                    name={enemy.name}
                    types={enemy.types}
                    image={enemy.image}
                    hasHoover={false}
                />)
            }
        </div >
    )
};


export default BattleField