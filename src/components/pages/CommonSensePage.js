import Header from "../common/Header"
import Footer from "../common/Footer"
import CommonSenseList from "../commonSense/CommonSenseList"
import CommonSenseTab from "../commonSense/CommonSenseTab"
import { useEffect, useState } from "react"

export default function CommonSensePage(){

    const [category, setCategory] = useState("general");

    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    useEffect(()=>{
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    }, [category])

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header title="건강상식" content="알아두면 쓸모 있는 🙆‍♂️" category={category}/>
            <CommonSenseTab handleCategoryChange={handleCategoryChange}/>
            <CommonSenseList category={category}/>
            <Footer />
        </>
    )
}