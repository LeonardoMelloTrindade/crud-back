import MyController from "../controllers/myController";

export default class RouterService {

    constructor(app) {
        this.app = app;
        this.myController = new MyController();
    }

    setup() {

        this.app.get("/produtos", this.myController.listar);

        this.app.post("/carrinho", this.myController.salvar);

        this.app.delete("/carrinho/:id", this.myController.deletar);

        this.app.put("/pokemon/:id", this.myController.editar);

    }
}

