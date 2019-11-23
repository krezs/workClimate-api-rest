"use strict";
/**
 * @author Felipe Gonzalez
 * @description user controller
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("../entity");
const typeorm_1 = require("typeorm");
class UserControler {
    /**
     * Returns all user registered in User table database
     */
    static getUser() {
        const userRepository = typeorm_1.getConnection(process.env.NODE_ENV).getRepository(entity_1.User);
        return new Promise((resolve, reject) => {
            return new Promise((resolve, reject) => {
                userRepository.find()
                    .then((result) => resolve(result), (error) => reject(error));
            });
        });
    }
    /**
     * create a new user with given param recieved in body param
     * @param body Contains information given by the user
     * @param createdById Containers id of the user which creates the user
     */
    static saveUser(body, createdById) {
        const user = new entity_1.User(body);
        user.createdById = createdById;
        const userRepository = typeorm_1.getConnection(process.env.NODE_ENV).getRepository(entity_1.User);
        return new Promise((resolve, reject) => {
            userRepository.save(user)
                .then((result) => resolve(result), (error) => reject(error));
        });
    }
}
exports.UserControler = UserControler;
//# sourceMappingURL=user.js.map