import {useEffect, useRef, useState} from "react";
import {useReduxContext} from "../../provider";
import {IUser} from "@/src/reducers/user/interface";


export const useSelect = function <T extends Record<string, any>, Selected>(fn: (store: T) => Selected) {
    const {select, deleteSubscriber} = useReduxContext();
    const [data, setData] = useState<T>()

    useEffect(() => {
        const selectCallback = (value: T) => {
            setData(value)
        }

        if(typeof window !== "undefined"){
            // @ts-ignore
            select(selectCallback)
        }
        return () => {
            // @ts-ignore
            deleteSubscriber(selectCallback)
        }
    }, [])

    if(data){
        return  fn(data)
    }
}

