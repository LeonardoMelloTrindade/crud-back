import PokemonModel from "../model/pokemon.model";
import TipoModel from "../model/tipo.model";
import PaginationService from "./paginationService";
import PaginationDTO from "../model/dto/paginateDTO"

export class PokemonService {

    constructor() {
        this.paginationService = new PaginationService();
    }

    async listarTipos() {
        const tipos = await TipoModel.find().exec();
        return tipos.map(tipo => tipo.nome);
    }

    async listar(page, limit) {
        const pokemons = await this.paginationService.paginate(PokemonModel.find(), page, limit);
        const total = await PokemonModel.count().exec();
        return new PaginationDTO(pokemons, page, limit, total);
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

    async buscar(id) {
        return PokemonModel.findById(id).lean().exec();
    }
}

