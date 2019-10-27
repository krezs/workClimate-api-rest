"use strict";
/**
 * @author Mauricio Godoy
 * @description Servicio para comunicación con cliente
 * @createdAt 20/03/2019
 * @updatedBy Mauricio Godoy
 * @descriptionUpdate Se remueve dependencia de configService. Se obtienen parámetroas desde environment
 * @updatedAt 04/04/2019
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const lodash_1 = require("lodash");
const rxjs_1 = require("rxjs");
const logger_1 = require("../common/logger");
const mapHandler_1 = require("../common/mapHandler");
const messageProvider_1 = require("../common/messageProvider");
const socketHandler_1 = require("../common/socketHandler");
class ClientCommunication {
    static onClientConnect() {
        return this.onClientConnectEvent.asObservable();
    }
    static onClientMessage() {
        return this.onClientMessageEvent.asObservable();
    }
    static _initialize() {
        this.onClientConnectEvent = new rxjs_1.Subject();
        this.onClientMessageEvent = new rxjs_1.Subject();
        this.namespaceCollection = new mapHandler_1.MapHandler();
        this.clientCollection = new mapHandler_1.MapHandler();
        return new Promise((resolve) => {
            const app = express_1.default();
            const server = http_1.createServer(app);
            server.listen(parseInt(process.env.APP_PORT, 10), () => {
                this.server = new socketHandler_1.SocketHandler(server);
                this.server.onConnect().subscribe((connection) => this.onConnect(connection));
                this.server.onDisconnect().subscribe((connection) => this.onDisconnect(connection));
                this.server.onMessage().subscribe((message) => this.onMessage(message));
                resolve(this.server);
            });
        });
    }
    static onConnect(connection) {
        const clientId = lodash_1.get(connection, this.USER_ID_PATH);
        this.onClientConnectEvent.next(connection);
        this.clientCollection.add(`${this.PREFIX}${clientId}`, connection);
    }
    static onDisconnect(connection) {
        const clientId = lodash_1.get(connection, this.USER_ID_PATH);
        if (clientId) {
            logger_1.Logger.info(messageProvider_1.MessageProvider.msg("CLIENT_DISCONNECT", clientId, this.CHANNEL));
            this.clientCollection.remove(connection.handshake.query.id);
        }
    }
    static onMessage(message) {
        this.onClientMessageEvent.next(message);
    }
    static _emitToAll(event, data, namespace) {
        if (this._hasClients()) {
            this.server.broadcast(event, data, namespace);
        }
    }
    static _emitToClient(userId, topic, data) {
        const userConnection = this.clientCollection.get(`${this.PREFIX}${userId}`);
        if (userConnection) {
            userConnection.emit(topic, data);
        }
    }
    static _hasClients() {
        return this.clientCollection.hasValues();
    }
    static _createNamespace(namespace) {
        if (this.namespaceCollection.hasKey(namespace)) {
            return this.namespaceCollection.get(namespace);
        }
        else {
            const socketServer = this.server.newNamespace(namespace);
            this.namespaceCollection.add(namespace, socketServer);
            return socketServer;
        }
    }
}
exports.ClientCommunication = ClientCommunication;
ClientCommunication.initialize = ClientCommunication._initialize;
ClientCommunication.emitToAll = ClientCommunication._emitToAll;
ClientCommunication.emitToClient = ClientCommunication._emitToClient;
ClientCommunication.hasClients = ClientCommunication._hasClients;
ClientCommunication.createNamespace = ClientCommunication._createNamespace;
ClientCommunication.USER_ID_PATH = "handshake.query.id";
ClientCommunication.CHANNEL = "client";
ClientCommunication.PREFIX = "client_";
exports.default = ClientCommunication;
//# sourceMappingURL=clientCommunication.js.map