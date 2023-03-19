import ProdutoModel from "../model/produto.model";
import PedidoModel from "../model/pedido.model";
import FilterService from "./filterService";
import FilterDTO from "../model/dto/filterDTO"

export class MyService {

    constructor() {
        this.filterService = new FilterService();
    }

    async listar(filterOption) {
        let filter = { tipo: '' };
        if (filterOption.filter === 'Modulo') {
            filter.tipo = 'Modulo'; // condição de consulta para o filtro "Modulo"
        }
        else if (filterOption.filter === 'EstacaoDeRecarga') {
            filter.tipo = 'EstacaoDeRecarga'; // condição de consulta para o filtro "EstacaoDeRecarga"
        } else {
            filter = {}; // condição de consulta para nenhum filtro
        }
        
        const datas = await this.filterService.filter(ProdutoModel.find(filter), filterOption);
        const total = await ProdutoModel.count().exec();
        return new FilterDTO(datas, filterOption, total);
    }

    async salvar(itensPedido, endereco) {
        
        const createdPokemon = new PedidoModel(itensPedido, endereco);
        return createdPokemon.save();
    }

    async deletar(id) {
        return ProdutoModel.findByIdAndDelete(id);
    }

    async editar(id, pokemon) {
        return ProdutoModel.findByIdAndUpdate(id, pokemon);
    }
}

