import { MyService } from "../services/myService";

export default class MyController {
  constructor() {
    this.myService = new MyService();
    this.listar = this.listar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.salvar = this.salvar.bind(this);
    this.deletar = this.deletar.bind(this);
    this.editar = this.editar.bind(this);
  }

  async listar(req, res) {
    try {
      const pokemons = await this.myService.listar();
      res.json(pokemons);
    } catch (error) {
      console.error(error);
      res.sendStatus(500).json({ error: "Ocorreu um erro na listagem dos pokemons." });
    }
  }

  async buscar(req, res) {
    try {
      const pokemonId = req.params.id
      const pokemon = await this.myService.buscar(pokemonId);
      res.json(pokemon);
    } catch (error) {
      console.error(error);
      res.sendStatus(500).json({ error: "Ocorreu um erro na busca do pokemon específico." });
    }
  }

  async salvar(req, res) {
    try {
      await this.myService.salvar(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.sendStatus(500).json({ error: "Ocorreu um erro ao salvar um pokemon." });
    }
  }

  async deletar(req, res) {
    try {
      const pokemonId = req.params.id;
      const deletedPokemon = await this.myService.deletar(pokemonId);
      if (!deletedPokemon) {
        res.sendStatus(404).json({ error: "Pokemon não encontrado." });
      } else {
        res.json(deletedPokemon);
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500).json({ error: "Ocorreu um erro ao deletar um pokemon." });
    }
  }

  async editar(req, res) {
    try {
      const pokemonId = req.params.id;
      const pokemon = req.body;
      const updatedPokemon = await this.myService.editar(pokemonId, pokemon);
      if (!updatedPokemon) {
        res.sendStatus(404).json({ error: "Pokemon não encontrado." });
      } else {
        res.json(updatedPokemon);
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(500).json({ error: "Ocorreu um erro ao editar um pokemon." });
    }
  }
}
