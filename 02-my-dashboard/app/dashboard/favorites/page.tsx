import { PokemonFavorites } from "@/pokemons";

export const metadata = {
 title: 'Favorites Pokemons',
 description: 'Favorites Pokemons',
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado Pokemons <small>estático</small></span>
      <PokemonFavorites />
    </div >
  );
}

