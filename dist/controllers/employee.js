"use strict";
/**
 * @author Felipe Gonzalez
 * @description Service from entity employee
 * @createdAt 25-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class EmployeeController {
    /**
     * Returns all employees from db
     */
    static getEmployees() {
        return new Promise((resolve, reject) => {
            const con = database_1.connect();
            con.query('SELECT * FROM employee')
                .then((result) => resolve(result[0]), (error) => reject(error));
        });
    }
}
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.js.map