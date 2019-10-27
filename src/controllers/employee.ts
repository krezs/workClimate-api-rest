/**
 * @author Felipe Gonzalez
 * @description Service from entity employee
 * @createdAt 25-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

 import { getConnection } from 'typeorm';
import { Employee } from '../entity';

export class EmployeeController {

    /**
     * Returns all employees from db
     */
    public static getEmployees() {
        const employeeRepository = getConnection(process.env.NODE_ENV).getRepository(Employee);
        return new Promise((resolve, reject) => {
            employeeRepository.find()
                .then(
                    (result) => resolve(result),
                    (error) => reject(error)
                );
        });
    }
}