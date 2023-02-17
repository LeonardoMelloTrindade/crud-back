import mongoose from 'mongoose';

export class ConnectionService {

    constructor() {
        mongoose.set("strictQuery", false);
    }

    async connect() {
        if (mongoose.connection.readyState === 0) {
            return mongoose.connect('mongodb://localhost:27017/pokedex-api', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        }
    }

    async disconnect() {
        console.log('Desconectando do MongoDB');
        await mongoose.disconnect();
    }
}

