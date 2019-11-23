"use strict";
/**
 * @author Felipe Gonzalez
 * @description user route
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.get("/", (req, res) => {
    controllers_1.UserControler.getUser().then((result) => {
        const response = {
            data: result,
            status: true
        };
        res.send(response);
    }, (error) => {
        const response = {
            error,
            status: false
        };
    });
});
//create new user post endpoint
router.post("/", (req, res) => {
    const createdById = 1; // TODO: next feature add corresponding id
    controllers_1.UserControler.saveUser(req.body, createdById).then((result) => {
        const response = {
            message: "User Created Succesfully",
            data: result,
            status: true
        };
        res.send(response);
    }, (error) => {
        const response = {
            message: "User creation failed",
            error,
            status: false
        };
        res.send(response);
    });
    //UserController
});
//# sourceMappingURL=user.js.map