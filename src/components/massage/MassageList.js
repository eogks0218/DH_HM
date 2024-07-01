import { useSelector } from "react-redux";
import "../../scss/Massage.scss";

export default function MassageList(){

    const massageList = useSelector(state => state.massage.massageList);

    return(
        <div className="MassageList-container">
            {
                massageList.length === 0 ?
                <div className="embed-container">
                    <h2 style={{height:"50vh"}}>마사지 부위를 선택해주세요 !</h2>
                </div>
                :
                massageList.map(item => (
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
    )
}