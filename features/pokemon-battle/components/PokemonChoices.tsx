import type { PokemonChoicesProps } from "../types/gameTypes"
import Card from "./Card"
import styles from "./PokemonChoices.module.css"



function PokemonChoices({
    options,
    onDragStart,
    onDragEnd,
    onClick
}: PokemonChoicesProps) {
    return (
        <div className={styles.choiceField}>
            {options.map((pokemon) => (
                <Card
                    key={pokemon.name}
                    name={pokemon.name}
                    types={pokemon.types}
                    image={pokemon.image}
                    isWinner={pokemon.isWinner}
                    onDragStart={() => onDragStart(pokemon)}
                    onDragEnd={onDragEnd}
                    dragabble={true}
                    hasHoover={true}
                    onClick={() => onClick(pokemon)}
                />
            ))}
        </div>
    )
}

export default PokemonChoices