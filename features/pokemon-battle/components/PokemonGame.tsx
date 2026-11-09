'use client'

import BattleField from "./BattleField"
import PokemonChoices from "./PokemonChoices"
import ScoreBoard from "./ScoreBoard"
import { getPokemonG1, getTypeDamageRelations } from "../api/pokeApi"
import { useEffect, useRef, useState, useReducer } from "react"
import { type Pokemon, type DamageRelations, type EnemyPokemon, type CardType } from "../types/gameTypes"
import { getUniqueTypes, getRandomEnemy, getPokemonCards } from "../gameLogic/gameLogic"
import { gameReducer } from "../gameReducer/gameReducer"
import styles from "./PokemonGame.module.css";
import { GameContext } from "../context/GameContext"

function PokemonGame() {
  
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [pokemonsArray, setPokemonsArray] = useState<Pokemon[]>([]);
  const [damageRelations, setDamageRelations] = useState<DamageRelations[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [draggedPokemon, setDraggedPokemon] = useState<CardType | null>(null);
  
  
  const [gameState, dispatch] = useReducer(
    gameReducer,
    {
      enemy: null,
      cardSelect: null,
      selectedPokemon: null,
      status: "playing",
    }
  );
  
  const gameInitialized = useRef(false);
  
  
  // true když se jedná o dotykový display
  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);
  
  
  //zavolání api funkcí s error handlingem 
  useEffect(() => {
    async function loadData() {
      try {
        const pokeArray = await getPokemonG1(); // získá pokemony první generace
        setPokemonsArray(pokeArray);

        const uniqueTypes = getUniqueTypes(pokeArray) //získá unikátní typy

        const relations = await getTypeDamageRelations(uniqueTypes); //získá double_damage_from ke všem typům
        setDamageRelations(relations);

      } catch { // když se to pokazí
        setError("Nepodařilo se načíst Pokémony.");
      } finally { //když se podaří i nepodaří
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

// prvnotní příprava hey
  useEffect(() => {
    if (
      damageRelations.length === 0 ||
      pokemonsArray.length === 0 ||
      gameInitialized.current
    ) {
      return;
    }
    gameInitialized.current = true;
    prepareGame();
  }, [pokemonsArray, damageRelations]); //použiju jen na začátku hry, pak už budu volat prepare game jinde

  
  function prepareGame() {
    const newEnemy: EnemyPokemon = getRandomEnemy(pokemonsArray, damageRelations);
    const newCards = getPokemonCards(pokemonsArray, newEnemy);
    dispatch({
      type: "PREPARE_GAME",
      enemy: newEnemy,
      cards: newCards, // action cards zmněná cardSelect v reduceru
    });
  };

  function handlerDragStart(pokemon: CardType) {
    setDraggedPokemon(pokemon)
  };

  function handeDragEnd() {
    setDraggedPokemon(null);
    console.log("nulled")
  };

  function handleDrop() {
    if (!draggedPokemon) {
      return;
    };

    dispatch({
      type: "SELECT_POKEMON",
      pokemon: draggedPokemon
    });

    setDraggedPokemon(null);
  };

  function handleResults() {
    if (!gameState.selectedPokemon) {
      return
    }
    if (gameState.selectedPokemon.isWinner) {
      dispatch({
        type: "WON",
      });
      console.log("won")
    }
    else {
      dispatch({
        type: "LOST",
      });
      console.log("lost")
    }
  };


  function handlePokemonClick(pokemon: CardType) {
    {
      if (isTouchDevice) {
        dispatch({
          type: "SELECT_POKEMON",
          pokemon: pokemon,
        });
      }
    }
  };




  if (isLoading) {  // zobrazení před dokončením loadPokemons
    return <p>Načítám Pokémony...</p>;
  }

  if (error) {  // error při chybě s načtením
    return <p>{error}</p>;
  }

  if (gameState.enemy === null) {
    return
  }


  return (
    <GameContext.Provider value={gameState}>
      <div className={styles.game} >
        <h1 className="font-heading">Pokemon Battle</h1>
        <BattleField
          enemy={gameState.enemy}
          selectedPokemon={gameState.selectedPokemon}
          onDrop={handleDrop}
          dragging={draggedPokemon!}
          handleResults={handleResults}
          prepareGame={prepareGame}
        />
        <ScoreBoard />
        {gameState.cardSelect && <PokemonChoices
          options={gameState.cardSelect}
          onDragStart={handlerDragStart}
          onDragEnd={handeDragEnd}
          onClick={handlePokemonClick} />}
      </div>
    </GameContext.Provider>
  )
}
export default PokemonGame