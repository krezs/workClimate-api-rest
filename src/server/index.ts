/**
 * @author Felipe Gonzalez
 * @description Server index where is defined all routes from server application
 * @createdAt 27-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import { getConnection } from 'typeorm';
import bodyParser from 'body-parser';
import { IResponse } from '../interface';
import { createServer } from 'http';
import { employeeRoute } from '../routes';

export class Server {
    private host: string;
    private port: number;
    
    constructor(host: string, port: string) {
        this.host = host;
        this.port = parseInt(port, 10);
    }

    public initialize(){
        const app = express();
        const COMPANY = "";
        const APP_NAME = "Work Climate Evaluation";
        const VERSION = "0.0.1";

        app.use(cors());
        app.use(this.hasConnection);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended : false }));

        app.get("/", (req, res) => {
            res.send(`${APP_NAME} (v${VERSION}) - ${COMPANY}`);
        });

        //ROUTES
        app.use("/employee", employeeRoute);
        
        const server = createServer(app);
        server.listen(this.port, this.host, () => {
            console.log(`Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`);
        });
    }

    private hasConnection(req: Request, res: Response, next: NextFunction) {
        if(getConnection(process.env.NODE_ENV).isConnected) {
            next();
        } else {
            const response: IResponse = {
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