import mongoose, { Schema } from 'mongoose';

const PokemonSchema = new Schema({
    nome: { type: String },
    tipo: { type: String },
    pokedex: { type: String }
});

export default mongoose.model('Pokemon', PokemonSchema);
