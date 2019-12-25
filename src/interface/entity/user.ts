export interface IUser {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    permissionId: number;
    createdById: number; 
    createAt: Date;
    updateById?: number;
    updateAt?: Date;
    isDisabled?: boolean;
    token?: string;
}