import mongoose from 'mongoose';

export default class ConnectionService {

    constructor() {
        mongoose.set("strictQuery", false);
    }

    async connect() {
        if (mongoose.connection.readyState === 0) {
            return mongoose.connect('mongodb://127.0.0.1:27017/crud-pokemon', {
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

