import { IPayloadTypes} from "@/src/redux";
import {IFriends, IProfile} from "./interface";


export enum profileType {
    SET_PROFILE_DATA = "SET_PROFILE_DATA",
    SET_PROFILE_LOADING = "SET_PROFILE_LOADING",
    SET_PROFILE_FRIENDS = "SET_PROFILE_FRIENDS",

}

export interface IProfilePayload {
    [profileType.SET_PROFILE_DATA]: IProfile,
    [profileType.SET_PROFILE_FRIENDS]: IFriends[],
    [profileType.SET_PROFILE_LOADING]: boolean,
}

const initStore = {
    id: "",
    name: "",
    currency: "",
    age: "",
    friends: [],
    loading: false
}

export const profileReducer = (store: IProfile = initStore, {type, payload}: IPayloadTypes<IProfilePayload>) => {
    switch(type) {
        case profileType.SET_PROFILE_DATA: {
            return {
                ...store,
                ...payload
            }
        }
        case profileType.SET_PROFILE_LOADING: {
            return  {
                ...store,
                loading: payload
            }
        }
        case profileType.SET_PROFILE_FRIENDS: {
            return  {
                ...store,
                friends: payload
            }
        }
        default: {
            return  store
        }
    }
}