import "../../scss/Taping.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../common/Loading";
import { sample_taping_list } from "../../module/taping";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export default function TapingList({category}){

    const tapingList = useSelector(state => state.taping.tapingList)
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const [openCards, setOpenCards] = useState({});
    const [openEmbeds, setOpenEmbeds] = useState({});

    useEffect(() => {
        dispatch(sample_taping_list(category));
    }, [dispatch, category])

    const toggleCard = (index) => {
        setOpenCards(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    const toggleEmbed = (index) => {
        setOpenEmbeds(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    if (isLoading || tapingList.length === 0) {
        return <Loading />;
    }

    return(
        <div className="TapingList-container">
            <div className="spaceBox"></div>
            <div className="Sources">출처 : 유튜브 <Link to="https://www.youtube.com/@Joint-Ahn">관절사용설명서</Link></div>
            {
                tapingList.map((item, index) => (
                    <div key={index} className={`taping_card_container ${openEmbeds[index] ? "active" : ""}`}>
                        <div className="taping_card" style={{backgroundImage:`url(${item.imageFile})`}} />
                        <div className={`spread_card ${openCards[index] ? 'active' : ''}`} onClick={() => toggleCard(index)}>
                            {
                                openCards[index] ? <GoTriangleLeft /> : <GoTriangleRight />
                            }
                        </div>
                        <div className={`taping_card_content ${openCards[index] ? 'active' : ''}`}>
                            <div className="taping_card_title">{item.title}</div>
                            <div className="taping_card_material">준비 : {item.material}</div>
                            <div className="taping_card_text" dangerouslySetInnerHTML={{__html : item.content}} />
                            <div className={`taping_card_video ${openEmbeds[index] ? 'active' : ''}`} onClick={() => toggleEmbed(index)}>
                                {
                                    openEmbeds[index] ? "접기" : "영상으로 확인하기"
                                }
                            </div>
                        </div>
                        <div className={`embed ${openEmbeds[index] ? 'active' : ''}`}>
                            <iframe
                                className={openEmbeds[index] ? "active" : ""}
                                src={item.video_src}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}