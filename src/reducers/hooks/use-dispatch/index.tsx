import {useMemo} from "react";
import {useDispatch as useReduxDispatch} from "@/src/redux";
import {IRootActionTypes, IStore} from "@/src/reducers/interface";

export const useDispatch = () => {

    const dispatch = useReduxDispatch<IStore, IRootActionTypes>()

    return useMemo(() => dispatch, [])
}