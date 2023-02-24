import express from 'express';
import RouterService from "./setup/routerService";
import MiddlewareService from "./setup/middlewareService";
import ConnectionService from './services/connectionService';

export default class Startup {
    constructor() {
        this.app = express();
        this.connectionService = new ConnectionService();
        this.routerService = new RouterService(this.app);
        this.middlewareService = new MiddlewareService(this.app);
    }

    async start() {
        try {

            await this.connectionService.connect();

            this.middlewareService.setup();
            this.routerService.setup();

            this.app.listen(3000, () => {
                console.log("A API ESTÁ RODANDO NA PORTA 3000");
            });

        } catch (error) {
            await this.connectionService.disconnect();
            throw error;
        }
    }
}

const startup = new Startup();
startup.start();





