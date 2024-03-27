import {useSelect} from "@/src/reducers";




export const Footer = () => {
    const user = useSelect((store) => store.user);

    return <div>{
        user?.age || "footer"
    }</div>
}