/**
 * @author Felipe Gonzalez
 * @description Login route
 * @createdAt 30-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

import { ISession } from "../interface";
import { getConnection } from "typeorm";
import { User } from "../entity";

 export class sessionController {

     public static getSession(body: ISession) {
        return new Promise(async (resolve, reject) => {
            const users = await getConnection(process.env.NODE_ENV)
                .createQueryBuilder(User, "u")
                .where("u.email = :user OR u.user = :user", { user: body.user })
                .getMany();
            if(users.length === 0) {
                reject({
                    message: "Invalid User", //TODO: MESSAGE TO CONFIG FILE
                });
            }



        });
    }
 }