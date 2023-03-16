import mongoose, { Schema } from 'mongoose';

const ProdutoSchema = new Schema({
    nome: { type: String },
    imagem: { type: String },
    codigo: { type: String },
    preco: { type: String },
    tipo: { type: String }
});

export default mongoose.model('Produto', ProdutoSchema);
