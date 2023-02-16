import mongoose from 'mongoose';

export async function connect() {
    mongoose.set("strictQuery", false);
    console.log('Conectando no MongoDB')

    return mongoose.connect(
        'mongodb://localhost:27017/pokedex-api',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

export async function disconnect() {
    console.log('Desconectando do MongoDB');
    return mongoose.disconnect();
}
