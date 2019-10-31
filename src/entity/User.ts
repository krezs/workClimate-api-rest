/**
 * @author Felipe Gonzalez
 * @description User Entity
 * @createdAt 30-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

 import bcryp from "bcrypt";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 async function buildPasswordHash(instance: any){
     if(instance.password && instance.password !== "" && instance.password !== null) {
         const hash = await bcryp.hash(instance.password, 10);
         return hash;
     }
 }

 @Entity()
 export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: false, length: 100 })
    public firstName: string;

    @Column({ nullable: false, length: 100 })
    public lastName: string;

    @Column({ nullable: false, length: 100 })
    public email: string;

    @Column({ nullable: false, length: 100 })
    public username: string;

    @Column({ nullable: false, length: 100 })
    public password: string;

    @Column({ nullable: false })
    public permissionId: number;

    @Column({ nullable: false })
    public createdById: number;

    @Column({ type: "datetime" })
    public createAt: Date;

    @Column({ nullable: true })
    public updateById: number;

    @Column({ type: "datetime", nullable: true })
    public updateAt: Date;

    @Column({ nullable: false })
    public isDisabled: boolean;

    @Column({ nullable: true, length: 500 })
    public token: string;






 }