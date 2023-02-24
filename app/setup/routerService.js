import PokemonController from "../controllers/pokemonController";

export default class RouterService {

    constructor(app) {
        this.app = app;
        this.pokemonController = new PokemonController();
    }

    setup() {
        this.app.get("/pokemon/tipos", this.pokemonController.listarTipos);

        this.app.get("/pokemon", this.pokemonController.listar);

        this.app.get("/pokemon/:id", this.pokemonController.buscar);

        this.app.post("/pokemon", this.pokemonController.salvar);

        this.app.delete("/pokemon/:id", this.pokemonController.deletar);

        this.app.put("/pokemon/:id", this.pokemonController.editar);
    }
}

