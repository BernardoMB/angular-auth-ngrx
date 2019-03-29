export interface IAdmin {
    email: string;
    password: string;
    tokens: Array<{
        access: string,
        token: string
    }>;
}
