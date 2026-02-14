'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavorites = () => {
  const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
  // const [pokemons, setPokemons] = useState(favoritesPokemons);

  // useEffect(() => {
  //   setPokemons(favoritesPokemons);
  // }, [favoritesPokemons])
  

  return (
    <div>
      {!!favoritesPokemons.length
        ? <PokemonGrid pokemons={favoritesPokemons} />
        : <NoFavorites />}
    </div>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}