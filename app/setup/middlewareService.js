import cors from "cors";
import bodyParser from "body-parser";

export default class MiddlewareService {

    constructor(app) {
        this.app = app;
    }

    setup() {
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(bodyParser.json());

        this.app.use((_, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
            this.app.use(cors());
            next();
        });
    }
}


