/**
 * @author Felipe Gonzalez
 * @description user route
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { Request, Response, Router } from "express";
import { UserControler } from "../controllers";
import { IResponse } from "../interface";

 const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    UserControler.getUser().then(
        (result) => {
            const response: IResponse = {
                data: result,
                status: true
            }
            res.send(response)
        },
        (error) => {
            const response: IResponse = {
                error,
                status: false
            }
        }
    );
});


 //create new user post endpoint
 router.post("/", (req: Request, res: Response) => {
    const createdById = 1; // TODO: next feature add corresponding id
    UserControler.saveUser(req.body, createdById).then(
        (result) => {
            const response: IResponse = {
                message: "User Created Succesfully",
                data: result,
                status: true
            }
            res.send(response);
        },
        (error) => {
            const response: IResponse = {
                message: "User creation failed",
                error,
                status: false
            }
            res.send(response);
        }
    );
    //UserController
 });