/**
 * @author Felipe Gonzalez
 * @description Service from entity employee
 * @createdAt 25-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { connect } from '../database';

export class EmployeeController {
    /**
     * Returns all employees from db
     */
    public static getEmployees(){
        return new Promise((resolve, reject) => {
            const con = connect();
            con.query('SELECT * FROM employee')
            .then(
                (result) => resolve(result[0]),
                (error) => reject(error)
            );
        });
    }
}