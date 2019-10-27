"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
function connect() {
    const connection = promise_1.createPool({
        host: "localhost",
        user: "root",
        password: "o25oggcy",
        database: "workClimate",
        connectionLimit: 10
    });
    return connection;
}
exports.connect = connect;
//# sourceMappingURL=database.js.map