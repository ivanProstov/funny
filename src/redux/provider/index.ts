import {createContext, createElement, ReactNode, useContext, Provider} from "react";
import {Redux} from "../store";

interface IReduxProviderProps {
    children: ReactNode;
    store: Redux<any, any>;
}


// TODO: придумать как прокинуть типы store и rootActions
let ReduxContext = createContext<Redux<any, any> | undefined>(undefined);

export const ReduxProvider = ({children, store}: IReduxProviderProps) => {
    return createElement(ReduxContext.Provider, { value: store }, children);
}

export const useReduxContext = <T extends Record<string, any>, P extends Record<string, any>>() => {
    const context = useContext<Redux<T, P> | undefined>(ReduxContext);
    if (context === undefined) {
        throw new Error('useReduxContext must be used within a ReduxProvider');
    }
    return context;
};

