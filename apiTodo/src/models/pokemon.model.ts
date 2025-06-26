import pokemonData, { setList } from "./pokemon.data";

export default class PokemonModel {
  getPokemon = () => {
    return pokemonData;
  };
  create = (pokemon: { name: string; type: string }) => {
    const newPokemon = { ...pokemon, id: Math.random() }; // "..." cria uma cópia dos valores que estão dentro do objeto(variavel)
    pokemonData.push(newPokemon);
    return pokemonData;
  };
  remove = (pokemon: number) => {
    const newList = pokemonData.filter((item) => {
      return item.id !== pokemon; // pescorre a lista e retorna a lista uma nova lista sem o item que possui o id inserido
    });
    return setList(newList);
  };
}
