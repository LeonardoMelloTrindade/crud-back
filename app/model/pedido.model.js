import mongoose, { Schema } from 'mongoose';

const ItemPedidoSchema = new Schema({
    nome: { type: String },
    imagem: { type: String },
    codigo: { type: String },
    preco: { type: String },
    tipo: { type: String }
});

const PedidoSchema = new Schema({
    itensPedido: { type: [ItemPedidoSchema] },
    endereco: { type: Object }
});

export default mongoose.model('Pedido', PedidoSchema);