import {ICombineReducersProps, IDispatchData, IPayloadTypes, IReduxProps} from "../interface";
type ISelectProps<T> = (value: T) => void

type ISetSubscribersFn<T> = ISelectProps<T>| Array<ISelectProps<T>>

export class Redux<T extends Record<string, any>, P extends Record<string, any>> {

    private reducers: ICombineReducersProps<T, P>;
    private _store:T = {} as T

    private _subscribers: Array<ISelectProps<T>> = [];
    constructor( {reducers, initState}: IReduxProps<T, P> ) {
        this.reducers = reducers;
        this.store = initState;
    }

    private get subscribers() {
        return this._subscribers;
    }


    private set subscribers (data: ISetSubscribersFn<T>) {
        if(Array.isArray(data)){
            this._subscribers = data
            return
        }
        this._subscribers.push(data);
    }

    private get store() {
        return this._store;
    }

    private set store (data: T) {
        this._store = data;
    }

    private rootReducer = (data: IDispatchData) => {
        this.store = Object.entries(this.reducers).reduce((prev, [name, fn]) => ({
            ...prev,
            [name]: fn(this.store[name] || undefined ,data)
        }), {} as T)

        if (Array.isArray(this.subscribers)) {
            this.subscribers.forEach((item) => item(this.store));
        }
    }

    public dispatch = (data: IPayloadTypes<P>) => {
        this.rootReducer(data)
    }

    public select = (fn: ISelectProps<T>) => {
        fn(this.store)
        this.subscribers = fn
    }

    public deleteSubscriber = (fn: ISelectProps<T>) => {
        this.subscribers = this._subscribers.filter((item) => item !== fn)
    }

}

