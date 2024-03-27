export interface IDispatchData { type: any, payload: any }
interface IAction<T> {
    type: keyof T;
    payload: T[keyof T];
}

export type IPayloadTypes<T> = { [K in keyof T]: IAction<{ [P in K]: T[K] }> }[keyof T];


export type IReducersFunction<S, P> = (store: S | undefined, data: IPayloadTypes<P>) => S;

export type ICombineReducersProps<T, P> =  { [K in keyof T]: IReducersFunction<T[K], P> }


export interface IReduxProps<T, P> {
    initState:T;
    reducers: ICombineReducersProps<T, P>;
}