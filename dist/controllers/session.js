"use strict";
/**
 * @author Felipe Gonzalez
 * @description Login route
 * @createdAt 30-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
class sessionController {
    static getSession(body) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const users = yield typeorm_1.getConnection(process.env.NODE_ENV)
                .createQueryBuilder(entity_1.User, "u")
                .where("u.email = :user OR u.user = :user", { user: body.user })
                .getMany();
            if (users.length === 0) {
                reject({
                    message: "Invalid User",
                });
            }
        }));
    }
}
exports.sessionController = sessionController;
//# sourceMappingURL=session.js.map