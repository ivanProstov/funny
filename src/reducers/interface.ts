import {IUser} from "./user/interface";
import {IProfile} from "./profile/interface";
import {IProfilePayload} from "@/src/reducers/profile";
import {IUserPayload} from "@/src/reducers/user";

export interface IStore {
    user: IUser;
    profile?: IProfile
}

export type IRootActionTypes = IProfilePayload & IUserPayload