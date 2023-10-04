import mongoose, { Schema } from 'mongoose';

const PokemonSchema = new Schema({
    pokedex: { type: String },
    nome: { type: String },
    tipo: { type: String }
});

export default mongoose.model('Pokemon', PokemonSchema);
