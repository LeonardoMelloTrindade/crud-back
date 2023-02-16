import { PokemonService } from "../services/pokemonService";

export class PokemonController {
    pokemonService = {}
    constructor() {
        this.pokemonService = new PokemonService();
    }

    async listarTipos(req, res) {
        try {

            const tipos = await this.pokemonService.listarTipos();
            res.json(tipos);

        } catch (error) {

            console.error(error);
            throw new Error('Ocorreu um erro na listagem de tipos');
        } finally {
            console.log('chego no finally get tipos')
        }
    }

    async listar(_, res) {

        try {
            const pokemon = await this.pokemonService.listar();

            res.json(pokemon);

        } catch (error) {

            console.error(error);
            throw new Error('Ocorreu um erro na listagem de pokemon');
        } finally {
            console.log('chego no finally get pokemons')
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
        } finally {
            console.log('chego no finally get pokemons')
        }
    }

    async salvar(req, res) {

        try {

            const pokemonSalvo = await this.pokemonService.salvar(req.body);
            res.json(pokemonSalvo);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro na criacao do pokemon');
        } finally {
            console.log('chego no finally post')
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
        } finally {
            console.log('chego no finally delete')
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
        } finally {
            console.log('chego no finally delete')
        }
    }
}

