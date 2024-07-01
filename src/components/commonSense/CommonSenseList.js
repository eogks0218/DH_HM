import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sample_commonsense_list } from "../../module/commonSense";
import Loading from "../common/Loading";
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";

export default function CommonSenseList({category}) {
    const dispatch = useDispatch();
    const commonSenseList = useSelector(state => state.commonSense.commonSenseList);
    const isLoading = useSelector(state => state.loading.isLoading);

    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        dispatch(sample_commonsense_list(category));
    }, [dispatch, category]);

    useEffect(()=> {
        const cards = document.querySelectorAll(".card");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('in-view');
                }else{
                    entry.target.classList.remove('in-view');
                }
            });
        });

        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };

    }, [commonSenseList])

    const frontClick = (index) => {
        setActiveCard(index);
    }

    const backClick = () => {
        setActiveCard(null);
    }

    if (isLoading || commonSenseList.length === 0) {
        return <Loading />;
    }

    return (
        <div className="CSL-container">
            <div className="spaceBox"></div>
            {
                commonSenseList &&
                commonSenseList.map((commonSense, index) => (
                    <div className={`card ${activeCard === index ? 'back-card in-view' : 'in-view'}`} key={index}>
                        <div className={`front ${activeCard !== index ? 'show-card' : ''}`}>
                            <div className="imgBox" style={{ backgroundImage: `url(${commonSense.imageFile})` }}></div>
                            <div className="front-content">
                                <div className="userNameBox">✍ {commonSense.userName}</div>
                                <div className="dateBox">📅 {commonSense.date}</div>
                                <div className="titleBox">{commonSense.title}</div>
                                <div className="buttonBox" onClick={() => frontClick(index)}><IoArrowRedo /></div>
                            </div>
                        </div>
                        <div className={`back ${activeCard === index ? 'show-card' : 'in-view'}`}>
                            <div className="back-content">
                                <div className="answerBox">{commonSense.answer} !</div>
                                <div className="contentBox" dangerouslySetInnerHTML={{ __html: commonSense.content }} />
                                <div className="buttonBox" onClick={backClick}><IoArrowUndo /></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}