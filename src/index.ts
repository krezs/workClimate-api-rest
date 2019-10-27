import cluster from "cluster";
import "reflect-metadata";
import {createConnection, Connection} from "typeorm";
import { Server } from "./server";

createConnection(process.env.NODE_ENV).then(
    (connection: Connection) => {
        if(cluster.isMaster) {
            initialize();
        }else{
            newServer();
        }
    }
);

function initialize() {
    newServer();
}

function newServer() {
    const server = new Server(process.env.APP_HOST, process.env.APP_PORT);
    server.initialize();
}
