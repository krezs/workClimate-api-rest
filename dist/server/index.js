"use strict";
/**
 * @author Felipe Gonzalez
 * @description Server index where is defined all routes from server application
 * @createdAt 27-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = require("http");
const routes_1 = require("../routes");
class Server {
    constructor(host, port) {
        this.host = host;
        this.port = parseInt(port, 10);
    }
    initialize() {
        const app = express_1.default();
        const COMPANY = "";
        const APP_NAME = "Work Climate Evaluation";
        const VERSION = "0.0.1";
        app.use(cors_1.default());
        app.use(this.hasConnection);
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: false }));
        app.get("/", (req, res) => {
            res.send(`${APP_NAME} (v${VERSION}) - ${COMPANY}`);
        });
        //ROUTES
        app.use("/employee", routes_1.employeeRoute);
        app.use("/session", routes_1.sessionRouter);
        app.use("/user", routes_1.userRouter);
        const server = http_1.createServer(app);
        server.listen(this.port, this.host, () => {
            console.log(`Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
        });
    }
    hasConnection(req, res, next) {
        if (typeorm_1.getConnection(process.env.NODE_ENV).isConnected) {
            next();
        }
        else {
            const response = {
                error: {
                    message: "could not connect to server",
                },
                message: "could not connect to server",
                status: false,
            };
            res.send(response);
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=index.js.map