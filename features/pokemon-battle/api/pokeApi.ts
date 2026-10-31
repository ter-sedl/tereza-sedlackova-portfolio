//práce s API. Async znamená, že funkce použije await. 
// Fetsh mi prátí Promise (response)
// await říká JS, ať si počká (protože fetsh nebo zběr dat z response trvá)
// data jsou to, co jsme od api chtěli
// async funkce sama o sobě vždy má return v promise (takže je třeba pak další asyn funkce na práci s tím)

import type { PokemonSpecies, PokeType } from "../types/gameTypes";

export async function getPokemonG1() {
    // fetch pokemonů první generace
    const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/generation/1`
    );
// error při http 404/500
    if (!pokemonResponse.ok) {
        throw new Error("Nepodařilo se načíst Pokémony.");
    }

    // přesun pokemonů do pokemonData
    const pokemonData = await pokemonResponse.json();
    // zmapování každého pokemonu z data a přiřazení do array pokemon: objekty s name, všechny type a img pro každého pokemona
    const pokemon = await Promise.all(
        pokemonData.pokemon_species.map(async (pokemon: PokemonSpecies) => {
            // console.log(pokemon);
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            if (!response.ok) {
                throw new Error("Nepodařilo se načíst Pokémony.");
            }
            const data = await response.json();

            return {
                name: data.name,
                types: data.types.map((type: PokeType) => type.type.name),
                image: data.sprites.front_default,
            };
        })
    );
    return pokemon;
}

// z dané array typů udělá novou array objektů, kde ke každému typu je double damage from
export async function getTypeDamageRelations(types: string[]) {
    const typeData = await Promise.all(
        types.map(async (type) => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/type/${type}`
            );
            if (!response.ok) {
                throw new Error("Nepodařilo se načíst informace o typech.");
            }
            const data = await response.json();

            return {
                type: type,
                doubleDamageFrom: data.damage_relations.double_damage_from.map(
                    (type: { name: string }) => type.name
                ),
            };
        })
    );

    return typeData;
}