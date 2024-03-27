import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";
import {Footer} from "@/src/components/footer";
import {useCallback, useEffect} from "react";
import { userType} from "@/src/reducers/user";
import {useDispatch, useSelect} from "@/src/reducers";
import {CanvasComponent} from "@/src/components/canvas";


const inter = Inter({ subsets: ["latin"] });



export const  HomeComponent = () => {
    const store = useSelect((store) => store);
    console.log("store >>> ", store)
    const user = useSelect((store) => store?.user);
    const dispatch = useDispatch();



    const setData = useCallback(() => {
        dispatch({type: userType.SET_USER_DATA, payload: {
                name: "ivan",
                loading: false,
                age: "22"
            }})
    } , [])

    return (
        <main className={`${styles.main} ${inter.className}`}>
            <CanvasComponent />
            {user?.name}
            <button onClick={setData} >added</button>
            home
            <Footer/>
        </main>
    )
}