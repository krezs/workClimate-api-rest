/**
 * @author Felipe Gonzalez
 * @description user route
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { Request, Response, Router } from "express";
import { UserController } from "../controllers";
import { IResponse } from "../interface";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    UserController.getUser().then(
        result => {
            const response: IResponse = {
                data: result,
                status: true,
            };
            res.send(response);
        },
        error => {
            const response: IResponse = {
                status : false,
                error,
            };
            res.send(response);
        }
    );

});


router.post("/", (req: Request, res: Response) => {
    const userCreatedById = 1; // TODO: incoming feature (add corresponding id to CreatedById)
    UserController.saveUser(req.body, userCreatedById).then(
        result => {
            const response: IResponse = {
                message: "User created succesfully",
                data: result,
                status: true
            };
            res.send(response);
        },
        error => {
            const response: IResponse = {
                message: "User creation failed",
                status: false,
                error,
            };
            res.send(response);
        }
    );
});

 export const userRouter: Router = router;