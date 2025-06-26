import PokemonModel from "../models/pokemon.model";
import { Express, Request, Response } from "express";

export default class PokemonController {
  constructor(app: Express) {
    app.get("/pokemons", this.getPokemon);
    app.post("/pokemons", this.postPokemon);
    app.delete("/pokemons/:id", this.deletePokemon);
  }

  getPokemon = (request: Request, response: Response) => {
    const pokemonModel = new PokemonModel();
    const pokemons = pokemonModel.getPokemon();
    console.log(pokemons);
    response.json(pokemons);
  };

  postPokemon = (request: Request, response: Response) => {
    console.log(request.body);
    const pokemonModel = new PokemonModel(); // criando nova instancia
    const pokemons = pokemonModel.create(request.body);
    console.log(pokemons);
    response.json(pokemons);
  };
  deletePokemon = (request: Request, response: Response) => {
    const pokemonModel = new PokemonModel(); // criando nova instancia
    console.log(request.params.id);
    const pokemons = pokemonModel.remove(Number(request.params.id));
    console.log(pokemons);
    response.json(pokemons);
  };
}
