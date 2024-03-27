import {Redux, combineReducers} from "@/src/redux";
import {userReducer} from "./user";
import { profileReducer} from "./profile";
import {IRootActionTypes, IStore} from "./interface";
export {useSelect} from "./hooks/use-select";
export {useDispatch} from "./hooks/use-dispatch";



const reducers = combineReducers<IStore>({
    user: userReducer,
    profile: profileReducer,
})

console.log("reducers >>> ", reducers)

export const redux = new Redux<IStore, IRootActionTypes>(reducers)

