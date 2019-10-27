"use strict";
/**
 * @author Felipe Gonzalez
 * @description Employee entity
 * @createdAt 25-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Employee = class Employee {
    constructor(values) {
        if (values) {
            for (const [key, value] of Object.entries(values)) {
                this[key] = value;
            }
        }
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 100 }),
    __metadata("design:type", String)
], Employee.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 20 }),
    __metadata("design:type", String)
], Employee.prototype, "rut", void 0);
Employee = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [Object])
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map