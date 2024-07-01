import Header from "../common/Header"
import Footer from "../common/Footer"
import MassageList from "../massage/MassageList"
import MassageTab from "../massage/MassageTab"
import { useEffect } from "react"

export default function MassagePage(){

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header title="마사지" content="부상 예방과 체력관리 💁‍♂️" />
            <MassageTab />
            <MassageList />
            <Footer />
        </>
    )
}