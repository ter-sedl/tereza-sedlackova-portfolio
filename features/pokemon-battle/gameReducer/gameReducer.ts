import type { GameAction, GameState } from "./gameTypes";

export const initialGameState: GameState = {
  enemy: null,
  cardSelect: null,
  selectedPokemon: null,
  status: "playing",
  //     score: 0,
  //     result: null,
};

export function gameReducer(
  state: GameState,
  action: GameAction
): GameState {
  switch (action.type) {
    case "PREPARE_GAME":
      return {
        enemy: action.enemy,
        cardSelect: action.cards, // array 3 pokemon" pro hráče
        selectedPokemon: null,
        status: "playing"
      };

    case "SELECT_POKEMON":
      return {
        ...state,
        selectedPokemon: action.pokemon,
      };

    case "WON":
      return {
        ...state,
        status: "won"
      }

    case "LOST":
      return {
        ...state,
        status: "lost"
      }

    default:
      return state;
  }
}