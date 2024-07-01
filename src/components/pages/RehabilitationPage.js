import Header from "../common/Header"
import Footer from "../common/Footer"
import RehabilitationList from "../rehabilitation/RehabilitationList"
import { useEffect } from "react"

export default function RehabilitationPage(){

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header title="재활운동" content="운동 기능 회복 및 유지 🙇‍♂️" />
            <RehabilitationList />
            <Footer />
        </>
    )
}