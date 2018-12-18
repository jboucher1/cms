declare namespace app {
    
    export interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        address: UserAddress;
        phone: string;
        website: string;
        company: UserCompany;
    }

    export interface UserCompany {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    export interface UserAddress {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: UserGeo;
    }

    export interface UserGeo {
        lat: string;
        lng: string;
    }

    export interface ModuleAddList {
        type: string,
        icon:string,
        title: string,
        subtitle:string
    }
    export interface Module {
        type: string,
        icon:string,
        hidden:boolean,
        title: string,
        order:number,
        id:number
    }
}