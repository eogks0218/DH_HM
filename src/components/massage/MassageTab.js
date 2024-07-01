import { useEffect, useState } from "react";
import "../../scss/Massage.scss";
import { useDispatch } from "react-redux";
import { sample_massage_list } from "../../module/massage";
import { Link } from "react-router-dom";

export default function MassageTab(){
    
    const [category, setCategory] = useState("")
    const dispatch = useDispatch();
    
    useEffect(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior:'smooth'
        });
    }, [category])

    useEffect(() => {
        dispatch(sample_massage_list(category));
    }, [dispatch, category])

    return(
        <div className="select-container">
            <h1>Massage List</h1>
            <div className="select-box">
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Massage Area</option>
                    <option value="all">All (전부)</option>
                    <option value="Back">Back (등)</option>
                    <option value="Shoulder">Shoulder (어깨)</option>
                    <option value="Neck">Neck (목)</option>
                    <option value="Knee">Knee (무릎)</option>
                    <option value="Elbow">Elbow (팔꿈치)</option>
                </select>
            </div>
            <div className="Sources">출처 : 유튜브 <Link to="https://www.youtube.com/@%ED%94%BC%EC%A7%80%EC%BB%AC%EA%B0%A4%EB%9F%AC%EB%A6%AC">피지컬갤러리</Link></div>
        </div>
    )
}