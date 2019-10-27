"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection(process.env.NODE_ENV).then((connection) => {
});
function initialize() {
    //ClientCommunication.initialize().then(() => new App());
    /*
        if (process.env.NODE_ENV === "production") {
          cluster.on("online", (worker) => {
            Logger.info(`Worker[${worker.process.pid}] process is running`);
          });
          cluster.on("exit", (worker, code, signal) => {
            Logger.error(`Worker[${worker.process.pid}] died with code: ${code}, and signal: ${signal}`);
            Logger.info(`Starting a new worker`);
            cluster.fork();
          });
          cluster.on("message", (worker: cluster.Worker, message: IWorkerMessage) => {
            const workerMessageType = message.messageType as unknown as keyof typeof EWorkerMessageType;
            switch (+workerMessageType) {
              case EWorkerMessageType.log:
                Logger.info(`Message from [${worker.process.pid}]: ${message.message}`);
                break;
              default:
                break;
            }
          });
          os.cpus().forEach(() => cluster.fork());
        } else {
          newServer();
        }
        */
}
//# sourceMappingURL=index.js.map