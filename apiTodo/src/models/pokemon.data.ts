type PokemonModelType = Array<{
  name: string;
  type: string;
  id: number;
}>;
let list: PokemonModelType = [
  { name: "Bubassaur", type: "leaf", id: 1 },
  { name: "Charmander", type: "fireDragon", id: 2 },
  { name: "Pikachu", type: "thunder", id: 3 },
];
export const setList = (newList: PokemonModelType) => {
  list = newList;
  return list; // "avisa" pro import que essa função aconteceu
};

export default list;
