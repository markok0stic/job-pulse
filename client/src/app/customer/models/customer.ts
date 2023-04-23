import { Roles } from "../enums/role";

export interface Customer {
    id: string;
    email: string;
    role: Roles;
    firstName: string;
    lastName: string;
    phone: string;
}

export interface LoginCustomer {
    customer: Customer,
    accessToken: string;
}

export interface RegisterCustomer {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
}
