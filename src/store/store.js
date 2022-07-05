import{configureStore} from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { PokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer:{
    counter:counterSlice.reducer,
    pokemons:PokemonSlice.reducer,
  },
})