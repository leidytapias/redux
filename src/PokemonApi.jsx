import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("se disparó");
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApi</h1>
      <hr />
      <ul>
        <li>cualquiercosa</li>
        <li>cualquiercosa</li>
        <li>cualquiercosa</li>
      </ul>
    </>
  );
};
