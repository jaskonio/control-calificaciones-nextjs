export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
};

export type Teacher = {
    id?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: string;
}