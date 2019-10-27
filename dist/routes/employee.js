"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employee_1 = require("../controllers/employee");
const router = express_1.Router();
router.get("/", (req, res) => {
    employee_1.EmployeeController.getEmployees().then((result) => {
        const response = {
            data: result,
            status: true
        };
        res.send(response);
    }, (error) => {
        const response = {
            status: false,
            error
        };
        res.send(response);
    });
});
exports.employeeRoute = router;
//# sourceMappingURL=employee.js.map