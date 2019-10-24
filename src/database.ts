import { createPool } from "mysql2/promise";

export function connect() {
    const connection = 
        createPool({
            host : "localhost",
            user : "root",
            password: "o25oggcy",
            database: "workClimate",
            connectionLimit : 10
        });
    return connection;
}