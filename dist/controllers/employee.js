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
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
class EmployeeController {
    /**
     * Returns all employees from db
     */
    static getEmployees() {
        const employeeRepository = typeorm_1.getConnection(process.env.NODE_ENV).getRepository(entity_1.Employee);
        return new Promise((resolve, reject) => {
            employeeRepository.find()
                .then((result) => resolve(result), (error) => reject(error));
        });
    }
}
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=employee.js.map