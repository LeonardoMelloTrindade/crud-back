import PokemonModel from "../model/pokemon.model";
export class MyService {
  async listar() {
    const pokemons = await PokemonModel.count().exec();
    return pokemons;
  }

  async salvar(pokemon) {
    const createdPokemon = new PokemonModel(pokemon);
    return createdPokemon.save();
  }

  async deletar(id) {
    return PokemonModel.findByIdAndDelete(id);
  }

  async editar(id, pokemon) {
    return PokemonModel.findByIdAndUpdate(id, pokemon);
  }
}
