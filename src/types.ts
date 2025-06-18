export type SendEmailData = {
    name: string;
    email: string;
    message: string;
};

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
