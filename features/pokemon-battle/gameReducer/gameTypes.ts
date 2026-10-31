import type { CardType, EnemyPokemon, GameStatus } from "../types/gameTypes";

export type GameState = {
    enemy: EnemyPokemon | null;
    cardSelect: CardType[] | null;
    selectedPokemon: CardType | null;
    status: GameStatus;
    // score: number;
    // result: "win" | "lose" | null;
};

export type GameAction =
    | {
        type: "PREPARE_GAME";
        enemy: EnemyPokemon;
        cards: CardType[];
    }
    | {
        type: "SELECT_POKEMON";
        pokemon: CardType;
    }
    | {
        type: "WON";
    }
    | {
        type: "LOST";
    }
// | {
//     type: "NEXT_ROUND";
//     enemy: Pokemon;
//     cardSelect: CardType[];
// };