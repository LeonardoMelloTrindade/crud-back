import PokemonModel from "../model/pokemon.model";
import TipoModel from "../model/tipo.model";
import PaginationService from "./paginationService";
import PaginationDTO from "../model/dto/paginateDTO"

export class PokemonService {

    constructor() {
        this.paginationService = new PaginationService();
    }

    async listarTipos(page, limit) {
        const tipos = await this.paginationService.paginate(TipoModel.find(), page, limit);
        const total = await TipoModel.count().exec();
        const tiposResult = tipos.map(function (tipo) {
            return tipo.nome;
        })


        return new PaginationDTO(tiposResult, page, limit, total);
    }

    async listar() {
        return PokemonModel.find().lean().exec();
    }

    async salvar(pokemon) {
        const createdPokemon = new PokemonModel(pokemon);
        await createdPokemon.save();
        return "Salvou com sucesso";
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

