/**
 * @author Felipe Gonzalez
 * @description Employee entity
 * @createdAt 25-10-2019
 * @updateBy
 * @descriptionUpdate
 * @updateAt
 */

 import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 import { IEmployee } from '../interface';

 @Entity("employee")
 export class Employee {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true, length: 100 })
    public firstName?: string;

    @Column({ nullable: true, length: 100 })
    public lastName?: string;

    @Column({ nullable: true, length: 20 })
    public rut: string;

    constructor(values?: IEmployee) {
        if(values){
            for (const [key, value] of Object.entries(values)){
                (this as any)[key] = value;
            }
        }
    }

 }