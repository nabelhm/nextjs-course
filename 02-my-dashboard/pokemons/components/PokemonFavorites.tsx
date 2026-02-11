'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const PokemonFavorites = () => {
  const pokemons = useAppSelector(state => Object.values(state.pokemons));

  return (
    <div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}