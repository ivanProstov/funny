import {useReduxContext} from "../../provider";
import {useMemo} from "react";

export const useDispatch = function<T extends Record<string, any>, P extends Record<string, any>,> () {

    const {dispatch} = useReduxContext<T, P>()

    return useMemo(() => dispatch, [])
}