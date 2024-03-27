import {IDispatchData, IPayloadTypes} from "@/src/redux";
import {IUser} from "./interface";
import {IFriends, IProfile} from "@/src/reducers/profile/interface";


export enum userType {
    SET_USER_DATA = "SET_USER_DATA",
    SET_USER_LOADING = "SET_USER_LOADING",

}

export interface IUserPayload {
    [userType.SET_USER_DATA]: IUser,
    [userType.SET_USER_LOADING]: boolean,
}

const initStore = {
    name: "",
    age: "",
    loading: false
}

export const userReducer = (store: IUser = initStore, {type, payload}: IPayloadTypes<IUserPayload>) => {
    switch(type) {
        case userType.SET_USER_DATA: {
            return {
                ...store,
                ...payload
            }
        }
        case userType.SET_USER_LOADING: {
            return  {
                ...store,
                loading: payload
            }
        }
        default: {
            return  store
        }
    }
}