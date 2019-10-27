"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const server_1 = require("./server");
typeorm_1.createConnection(process.env.NODE_ENV).then((connection) => {
    if (cluster_1.default.isMaster) {
        initialize();
    }
    else {
        newServer();
    }
});
function initialize() {
    newServer();
}
function newServer() {
    const server = new server_1.Server(process.env.APP_HOST, process.env.APP_PORT);
    server.initialize();
}
//# sourceMappingURL=index.js.map