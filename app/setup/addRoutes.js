import { PokemonController } from "../controllers/pokemonController";
const pokemonController = new PokemonController()

export default (app) => {
    app.get("/pokemon/tipos", pokemonController.listarTipos.bind(pokemonController));

    app.get("/pokemon", pokemonController.listar.bind(pokemonController));

    app.get("/pokemon/:id", pokemonController.buscar.bind(pokemonController));

    app.post("/pokemon", pokemonController.salvar.bind(pokemonController));

    app.delete("/pokemon/:id", pokemonController.deletar.bind(pokemonController));

    app.put("/pokemon/:id", pokemonController.editar.bind(pokemonController));
}

