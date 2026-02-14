import { Middleware } from "@reduxjs/toolkit"
import { RootState } from "..";

export const localStorageMiddleware: Middleware = ( store ) => (next) => (action: any) => {
    next(action);

    if ( action.type === 'pokemons/toggleFavorite' ) {
      const { pokemons } = store.getState() as RootState;
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('favorite-pokemons', JSON.stringify( pokemons ));
      }
      
      return;
    }  
}