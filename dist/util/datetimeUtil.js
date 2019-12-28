"use strict";
/**
 * @author Felipe Gonzalez
 * @description Class which has format method of datetime value to entities class
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
require("moment/locale/es");
class datetimeUtil {
    static getCurrentDateTimeAsDate() {
        return this.momentNowInstance().toDate();
    }
    static momentNowInstance() {
        const now = new Date().toISOString(); //string utc
        const offset = parseInt(process.env.OFFSET, 10);
        return moment_timezone_1.default(now).utcOffset(offset);
    }
}
exports.datetimeUtil = datetimeUtil;
//# sourceMappingURL=datetimeUtil.js.map