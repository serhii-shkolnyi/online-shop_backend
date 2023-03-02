export interface IUser {
    id: number;
    role: string;
    activated: boolean;
    email: string;
    password: string;
    activationLink: string;
    createdAt: string;
    deletedAt?: string;
}
