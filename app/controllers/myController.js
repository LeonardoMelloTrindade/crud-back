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
            const filter = req.query;

            const produto = await this.myService.listar(filter);

            res.send(produto);

        } catch (error) {

            console.error(error);
            throw new Error('Ocorreu um erro na listagem dos produtos');
        }
    }

    async salvar(req, res) {

        try {
            const { itensPedido, endereco } = req.body;
            console.log(itensPedido)
            console.log(endereco)

            const pokemonSalvo = await this.myService.salvar(itensPedido, endereco);
            res.json(pokemonSalvo);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro na criacao do pedido');
        }
    }

    async deletar(req, res) {

        try {
            const pokemonId = req.params.id;
            const deletedPokemon = await this.myService.deletar(pokemonId);
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
            const updatedPokemon = await this.myService.editar(pokemonId, pokemon);
            res.json(updatedPokemon);

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao deletar o pokemon');
        }
    }
}

