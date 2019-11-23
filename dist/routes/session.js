"use strict";
/**
 * @author Felipe Gonzalez
 * @description Login route
 * @createdAt 30-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.post("/", (req, res) => {
    controllers_1.sessionController.getSession(req.body).then((result) => {
        const response = {
            data: result,
            status: true,
        };
        res.send(response);
    }, (error) => {
        const response = {
            error,
            status: false,
        };
        res.send(response);
    });
});
exports.sessionRouter = router;
//# sourceMappingURL=session.js.map