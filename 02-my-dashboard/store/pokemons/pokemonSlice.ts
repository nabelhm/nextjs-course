import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
    favorites: {[key : string]: SimplePokemon}
}

const getInitialState = () : PokemonState => {

  if (typeof localStorage === 'undefined') {
    return {favorites:{}};
  }
  return {favorites : JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')}
}

const initialState:PokemonState = {
//  ...getInitialState() //desestructurar para que se pasen los pokemons del array individualmente
  favorites:{}
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<{[key : string]: SimplePokemon}>) => { 
      state.favorites = action.payload
    },

    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const {id} = pokemon; 
      
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      //mala práctica, los reducers no deben hacer más nada
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavorites} = pokemonSlice.actions

export default pokemonSlice.reducer