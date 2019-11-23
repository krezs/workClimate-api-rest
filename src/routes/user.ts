/**
 * @author Felipe Gonzalez
 * @description user route
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { Request, Response, Router } from "express";

 const router: Router = Router();

 //create new user post endpoint
 router.post("/", (req: Request, response: Response) => {
    const createdById = 1; // TODO: next feature add corresponding id
    //UserController
 });