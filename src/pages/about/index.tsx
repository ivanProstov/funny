import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";
import {Footer} from "@/src/components/footer";
import {useCallback} from "react";
import {userType} from "@/src/reducers/user";
import {useDispatch, useSelect} from "@/src/reducers";


const inter = Inter({ subsets: ["latin"] });

export const AboutComponent = () => {
    const user = useSelect((store) => store?.user);
    const dispatch = useDispatch();


    const setData = useCallback(() => {
        dispatch({type: userType.SET_USER_DATA, payload: {
                name: "ivan2",
                age: "29",
                loading: false
            }})
    } , [])

    return (
        <main className={`${styles.main} ${inter.className}`}>
            {user?.name}

            <button onClick={setData} >added</button>
            about
            <Footer/>
        </main>
    )
}