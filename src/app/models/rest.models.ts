import { Product } from './product.models';
import { UserData } from './user.models';

export interface LoginData {
    "email": string,
    "password": string
}

export interface RegisterData extends UserData {
    "passwordConfirmation": string
}

export interface RegisterResponse {
    "id": number,
    "name": string,
    "email": string
}

export interface LoginResponse {
    "accessToken": string,
    "refreshToken": string
}

export interface Pagination {
    "totalPages": number,
    "itemsPerPage": number,
    "totalItems": number,
    "currentPage": number,
    "nextPage": number | null,
    "previousPage": number | null
}

export interface GetProductsResponse {
    "products": Product[],
    "pagination": Pagination
}