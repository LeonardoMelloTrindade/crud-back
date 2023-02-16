import express from 'express';
import addRoutes from "./setup/addRoutes";
import addMiddlewares from "./setup/addMiddlewares";
import { ConnectionService } from './services/connectionService';

export async function handler() {

    const connectionService = new ConnectionService();

    try {

        await connectionService.connect();

        const app = express();

        addMiddlewares(app); // DEVE SER ADICIONANDO ANTES DOS CONTROLLERS
        addRoutes(app);

        app.listen(3000, () => {
            console.log("A API ESTÁ RODANDO NA PORTA 3000");
        });

    } catch (error) {
        await connectionService.disconnect();
        throw error;
    }
}

handler();





