import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sample_rehabilitation_list } from "../../module/rehabilitation";

export default function RehabilitationList({ category }) {

    const [subCategory, setSubCategory] = useState("");
    const rehabilitationList = useSelector(state => state.rehabilitation.rehabilitationList)
    const dispatch = useDispatch();
    
    const subTabContent = document.querySelectorAll(".subTab-content");

    useEffect(() => {
        subTabContent.forEach((item) => {
            item.addEventListener("click", () => {
                if(item.classList.contains("active")){
                    item.classList.remove("active");
                    setSubCategory("")
                }else{
                    subTabContent.forEach((i) => i.classList.remove("active"));
                    item.classList.add("active");
                    setSubCategory(item.textContent);
                }
            })
        });
    }, [subTabContent]);

    useEffect(() => {
        setSubCategory("");
        subTabContent.forEach((item) => item.classList.remove("active"));
    }, [category, subTabContent])

    useEffect(() => {
        dispatch(sample_rehabilitation_list(subCategory))
    }, [dispatch, subCategory])

    const renderSubTabs = () => {
        switch (category) {
            case "All":
                return ["목", "어깨", "손목", "고관절", "무릎", "발목"];
            case "Upper":
                return ["목", "어깨", "손목"];
            case "Lower":
                return ["고관절", "무릎", "발목"];
            default:
                return ["👋"];
        }
    };

    return (
        <div className="RehabilitationList-container">
            <div className="spaceBox"></div>
            <div className="Sources">출처 : 유튜브 <Link to="https://www.youtube.com/@Phycato">살기위한운동, 피카토</Link></div>
            <div className="subTab">
                {renderSubTabs().map((item, index) => (
                    <div key={index} className="subTab-content">{item}</div>
                ))}
            </div>
            <div className="rehabilitationList-content">
                {
                    rehabilitationList.length === 0 ?
                        <div className="embed-container">
                            <h2 style={{ height: "40vh" }}>운동 부위를 선택해주세요!</h2>
                        </div> :
                        rehabilitationList.map(item => (
                            <div className="embed-container">
                                <iframe 
                                    src={item.youtubeSrc}
                                    title="YouTube video player"
                                    width="560"
                                    height="315"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    );
}