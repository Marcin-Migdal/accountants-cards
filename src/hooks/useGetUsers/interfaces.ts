export type StatusType = "NOT_LOADED" | "LOADING" | "LOADING_ON_ERROR" | "LOADED" | "ERROR";

export enum STATUS {
    NOT_LOADED = "NOT_LOADED",
    LOADING = "LOADING",
    LOADING_ON_ERROR = "LOADING_ON_ERROR",
    LOADED = "LOADED",
    ERROR = "ERROR",
}
export type AccountantsData = {
    results: Result[];
    info: Info;
    status: StatusType;
};

export interface Result {
    gender: string;
    email: string;
    phone: string;
    cell: string;
    nat: string;
    price: string;

    name: {
        title: string;
        first: string;
        last: string;
    };
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    id: {
        name: string;
        value: any;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };

    location: Location;
    login: Login;
}

export interface Location {
    country: string;
    state: string;
    city: string;
    postcode: number;
    street: {
        number: number;
        name: string;
    };
    coordinates: {
        latitude: string;
        longitude: string;
    };
    timezone: {
        offset: string;
        description: string;
    };
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version?: string;
}

export interface GetAccountantsParams {
    page: number;
    results: number;
    seed: string;
}
