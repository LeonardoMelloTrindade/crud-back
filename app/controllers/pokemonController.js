import { PokemonService } from "../services/pokemonService";

export default class PokemonController {

    constructor() {
        this.pokemonService = new PokemonService();
        this.listarTipos = this.listarTipos.bind(this);
        this.listar = this.listar.bind(this);
        this.buscar = this.buscar.bind(this);
        this.salvar = this.salvar.bind(this);
        this.deletar = this.deletar.bind(this);
        this.editar = this.editar.bind(this);
    }

    async listarTipos(_, res) {
        try {
            const tipos = await this.pokemonService.listarTipos();
            res.json(tipos);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro na listagem de tipos');
        }
    }

    async listar(req, res) {

        try {
            const { page, limit } = req.query;

            const pokemon = await this.pokemonService.listar(page, limit);

            res.json(pokemon);

        } catch (error) {

            console.error(error);
            throw new Error('Ocorreu um erro na listagem de pokemon');
        }
    }

    async buscar(req, res) {
        try {
            const pokemonId = req.params.id;
            const pokemon = await this.pokemonService.buscar(pokemonId);

            res.json(pokemon);

        } catch (error) {

            console.error(error);
            throw new Error('Ocorreu um erro na listagem de pokemon');
        }
    }

    async salvar(req, res) {

        try {

            const pokemonSalvo = await this.pokemonService.salvar(req.body);
            res.json(pokemonSalvo);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro na criacao do pokemon');
        }
    }

    async deletar(req, res) {

        try {
            const pokemonId = req.params.id;
            const deletedPokemon = await this.pokemonService.deletar(pokemonId);
            res.json(deletedPokemon);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao deletar o pokemon');
        }
    }

    async editar(req, res) {

        try {
            const pokemonId = req.params.id;
            const pokemon = req.body;
            const updatedPokemon = await this.pokemonService.editar(pokemonId, pokemon);
            res.json(updatedPokemon);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao deletar o pokemon');
        }
    }
}

