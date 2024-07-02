import Header from "../common/Header"
import Footer from "../common/Footer"
import RehabilitationTab from "../rehabilitation/RehabilitationTab"
import RehabilitationList from "../rehabilitation/RehabilitationList"
import { useEffect, useState } from "react"

export default function RehabilitationPage(){
    
    const [category, setCategory] = useState("")

    const handleCategoryChange = (category) => {
        setCategory(category)
    }

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header title="재활운동" content="운동 기능 회복 및 유지 🙇‍♂️" />
            <RehabilitationTab handleCategoryChange={handleCategoryChange} category={category}/>
            <RehabilitationList category={category}/>
            <Footer />
        </>
    )
}