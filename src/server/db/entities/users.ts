import {Entities} from "./index";


export interface IUsersEntity {
    email: string;
    password: string;
}

export const usersEntity = Entities.init<IUsersEntity>("users");

