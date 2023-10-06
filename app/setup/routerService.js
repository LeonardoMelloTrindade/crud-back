import MyController from "../controllers/myController";

export default class RouterService {

    constructor(app) {
        this.app = app;
        this.myController = new MyController();
    }

    setup() {

        this.app.get("/pokemon", this.myController.listar);

        this.app.get("/pokemon/:id", this.myController.buscar);

        this.app.post("/pokemon", this.myController.salvar);

        this.app.delete("/pokemon/:id", this.myController.deletar);

        this.app.put("/pokemon/:id", this.myController.editar);

    }
}

