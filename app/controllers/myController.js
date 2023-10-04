import { MyService } from "../services/myService";

export default class MyController {
  constructor() {
    this.myService = new MyService();
    this.listar = this.listar.bind(this);
    this.salvar = this.salvar.bind(this);
    this.deletar = this.deletar.bind(this);
    this.editar = this.editar.bind(this);
  }

  async listar(req, res) {
    try {
      const pokemons = await this.myService.listar();
      res.send(pokemons);
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro na listagem do(s) pokemon(s)");
    }
  }

  async salvar(req, res) {
    try {
      await this.myService.salvar(req.body);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao salvar um pokemon");
    }
  }

  async deletar(req, res) {
    try {
      const pokemonId = req.params.id;
      const deletedPokemon = await this.myService.deletar(pokemonId);
      res.json(deletedPokemon);
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao deletar um pokemon");
    }
  }

  async editar(req, res) {
    try {
      const pokemonId = req.params.id;
      const pokemon = req.body;
      const updatedPokemon = await this.myService.editar(pokemonId, pokemon);
      res.json(updatedPokemon);
    } catch (error) {
      console.error(error);
      throw new Error("Ocorreu um erro ao editar um pokemon.");
    }
  }
}
