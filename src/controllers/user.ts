/**
 * @author Felipe Gonzalez
 * @description user controller
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { IUser } from "../interface";
import { User } from "../entity";
import { getConnection } from "typeorm";

export class UserControler {
    
    /**
     * Returns all user registered in User table database
     */
    public static getUser() {
        const userRepository = getConnection(process.env.NODE_ENV).getRepository(User);
        return new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => {
                userRepository.find()
                    .then(
                        (result) => resolve(result),
                        (error) => reject(error)
                    );
            });
        });
    }

    /**
     * create a new user with given param recieved in body param
     * @param body Contains information given by the user
     * @param createdById Containers id of the user which creates the user
     */
    public static saveUser(body: IUser, createdById: number) {
        const user = new User(body);
        user.createdById = createdById;
        const userRepository = getConnection(process.env.NODE_ENV).getRepository(User);
        return new Promise((resolve, reject) => {
            userRepository.save(user)
            .then(
                (result) => resolve(result),
                (error) => reject(error)
            );
        });
    }
}