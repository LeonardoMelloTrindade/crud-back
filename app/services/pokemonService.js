import PokemonModel from "../model/pokemon.model";
import TipoModel from "../model/tipo.model";

export class PokemonService {
    async listarTipos() {
        const tipos = await TipoModel.find().lean().exec();
        const tiposResult = tipos.map(function (tipo) {
            return tipo.nome;
        })
        return tiposResult;
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
        PokemonModel.findByIdAndDelete(id);
        return "Pokemon deletado com sucesso";
    }

    async editar(id, pokemon) {
        PokemonModel.findByIdAndUpdate(id, pokemon);
        return "Pokemon atualizado com sucesso";
    }

    async buscar(id) {
        return PokemonModel.findById(id).lean().exec();
    }
}

