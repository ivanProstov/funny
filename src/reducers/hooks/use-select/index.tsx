import {IStore} from "@/src/reducers/interface";
import {useSelect as useReduxSelect} from "@/src/redux";

export const useSelect = function<Selected>(fn: ((value: IStore) => Selected)) {
        return useReduxSelect<IStore, Selected>(fn)
}