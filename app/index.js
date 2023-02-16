import express from 'express';
import addRoutes from "./setup/addRoutes";
import addMiddlewares from "./setup/addMiddlewares";
import { connect, disconnect } from './services/connectionService';

try {
    await connect();

    const app = express();

    addMiddlewares(app); // DEVE SER ADICIONANDO ANTES DOS CONTROLLERS
    addRoutes(app);

    app.listen(3000, () => {
        console.log("A API ESTÁ RODANDO NA PORTA 3000");
    });

} catch (error) {
    await disconnect();
    throw error;
}






