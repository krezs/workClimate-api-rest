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
    controllers_1.UserController.getUser().then(result => {
        const response = {
            data: result,
            status: true,
        };
        res.send(response);
    }, error => {
        const response = {
            status: false,
            error,
        };
        res.send(response);
    });
});
router.post("/", (req, res) => {
    const userCreatedById = 1; // TODO: incoming feature (add corresponding id to CreatedById)
    controllers_1.UserController.saveUser(req.body, userCreatedById).then(result => {
        const response = {
            message: "User created succesfully",
            data: result,
            status: true
        };
        res.send(response);
    }, error => {
        const response = {
            message: "User creation failed",
            status: false,
            error,
        };
        res.send(response);
    });
});
exports.userRouter = router;
//# sourceMappingURL=user.js.map