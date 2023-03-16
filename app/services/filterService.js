export default class FilterService {
    
    async filter(query, filterOption) {
        if(filterOption === 'Todos') {
            return query.find().exec();
        } else if(filterOption === 'Modulo') {
            return query.find(filterOption).exec(); //defina aqui as propriedades do objeto de filtro para a opção 1
        } else if(filterOption === 'EstacaoDeRecarga') {
            return query.find(filterOption).exec(); // defina aqui as propriedades do objeto de filtro para a opção 2
         } else {
            // caso nenhuma opção seja selecionada, retorna todos os registros sem filtro
            return query.exec();
        }
    }
}