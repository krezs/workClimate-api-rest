/**
 * @author Felipe Gonzalez
 * @description Class which has format method of datetime value to entities class
 * @createdAt 23-11-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

 import moment from "moment-timezone";
 import "moment/locale/es";
 

 export class datetimeUtil {
    public static getCurrentDateTimeAsDate() {
        return this.momentNowInstance().toDate();
    }

    public static momentNowInstance() {
        const now = new Date().toISOString(); //string utc
        const offset: number = parseInt(process.env.OFFSET, 10);
        return moment(now).utcOffset(offset);
    }
 }
