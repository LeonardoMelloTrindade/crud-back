import mongoose, { Schema } from 'mongoose';

const ItemPedidoSchema = new Schema({
    nome: { type: String },
    imagem: { type: String },
    codigo: { type: String },
    preco: { type: String },
    tipo: { type: String }
});

const PedidoSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
    itensPedido: { type: [ItemPedidoSchema] },
    endereco: { type: Object }
}, { timestamps: true });

export default mongoose.model('Pedido', PedidoSchema);
