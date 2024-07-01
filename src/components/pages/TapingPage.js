import Header from "../common/Header";
import Footer from "../common/Footer";
import TapingList from "../taping/TapingList";
import TapingTab from "../taping/TapingTab";
import { useEffect, useState } from "react";

export default function TapingPage(){

    const [category, setCategory] = useState("all");

    const handleCategoryChange = (category) => {
        setCategory(category);
    }
    useEffect(()=>{
        window.scrollTo({
            top: window.innerHeight,
            behavior:'smooth'
        })
    }, [category])

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Header title="테이핑" content="부상 방지와 치료에 필수 🙆‍♂️" category={category}/>
            <TapingTab handleCategoryChange={handleCategoryChange}/>
            <TapingList category={category}/>
            <Footer />
        </>
    )
}