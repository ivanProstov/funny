import {ICombineReducersProps, IReduxProps} from "../interface";


export const combineReducers = function<T extends Record<string, any>> (reducers: ICombineReducersProps<T, unknown>): IReduxProps<T, any> {
    const initState = Object.entries(reducers).reduce((prev, [name, fn]) => ({
        ...prev,
        [name]: fn(undefined, {type: "INIT", payload: ""})
    }), {})

    return {
        initState: initState as unknown as T,
        reducers
    }
}