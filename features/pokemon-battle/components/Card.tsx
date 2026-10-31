'use client'

import { useContext, useState } from "react";
import type { CardProps } from "../types/gameTypes";
import styles from "./Card.module.css"
import { GameContext } from "../context/GameContext";

function Card({
    name,
    types,
    image,
    onDragStart,
    onDragEnd,
    afterGameDisable,
    isWinner,
    size,
    dragabble = false,
    hasHoover,
    onClick }: CardProps) {

    const gameState = useContext(GameContext);
    const status = gameState?.status;

    const [isDragging, setIsDragging] = useState(false);
    // console.log("Card pokemon:", name, types, isWinner);

    function capitalize(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div
            onClick={onClick}
            className={`
                ${styles.card} 
                ${size === "large" ? styles.large : ""}
                ${isDragging ? styles.dragging : ""}
                ${hasHoover ? styles.hasHoover : ""}
                ${afterGameDisable ? styles.afterGameDisable : ""}
                ${status !== "playing" && isWinner === false ? styles.afterGameDisable : ""}
            `}
            draggable={status !== "playing" ? false : dragabble}
            onDragStart={() => {
                onDragStart?.()
                setIsDragging(true);
            }}
            onDragEnd={() => {
                onDragEnd?.();
                setIsDragging(false);
            }}
        >
            <img src={image} alt="" draggable={false} />
            <h3>{capitalize(name)}</h3>
            <p>{types.join(" ")}</p>
        </div>
    );
};

export default Card