import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./PokemonSlace"


export const getPokemons = (page = 0) =>{
    return async (dispach, getState)=> {
     dispach(startLoadingPokemons());
     // TODO: realizar ´peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset={page * 10 }`);
        // const data = await resp.json();
        const resp= await pokemonApi.get(`pokemon?limit=10&offset={page * 10 }`);
        console.log(resp);
     dispach(setPokemons({pokemons: data.results, page: page + 1}));

    }
}