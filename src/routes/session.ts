/**
 * @author Felipe Gonzalez
 * @description Login route
 * @createdAt 30-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { Request, Response, Router } from "express";
import { sessionController } from "../controllers";
import { IResponse } from "../interface";

 const router: Router = Router();

 router.post("/", (req: Request, res: Response) => {
    sessionController.getSession(req.body).then(
        (result: any) => {
            const response: IResponse = {
                data: result,
                status: true,
            };
            res.send(response);
        },
        (error) => {
            const response: IResponse = {
                error,
                status: false,
            }
            res.send(response);
        }
    );
 });

 export const sessionRouter: Router = router;