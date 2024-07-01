import { useEffect } from "react";
import "../../scss/Taping.scss";
import { FaPersonRays, FaPersonArrowUpFromLine, FaPersonArrowDownToLine } from "react-icons/fa6";


export default function TapingTab({handleCategoryChange}){

    useEffect(()=> {
        const tapingTabItems = document.querySelectorAll('.tapingTab-item');

        if (tapingTabItems.length === 0) {
            console.error('No navigation-tab-item elements found');
            return;
        }

        const handleClick = (event) => {
            // 모든 항목에서 active 클래스 제거
            tapingTabItems.forEach(tab => tab.classList.remove('active'));
            
            // 클릭된 항목에 active 클래스 추가
            event.currentTarget.classList.add('active');
        };

        tapingTabItems.forEach(item => {
            item.addEventListener('click', handleClick);
        });

        // Clean up 이벤트 리스너
        return () => {
            tapingTabItems.forEach(item => {
                item.removeEventListener('click', handleClick);
            });
        };
    }, [])

    return(
        <nav className="TapingTab-container">
            <div className="tapingTab-item active" onClick={() => handleCategoryChange("all")}>
                <FaPersonRays />
                <h3>
                    All
                </h3>
            </div>
            <div className="tapingTab-item" onClick={() => handleCategoryChange("upper")}>
                <FaPersonArrowUpFromLine />
                <h3>
                    Upper
                </h3>
            </div>
            <div className="tapingTab-item" onClick={() => handleCategoryChange("lower")}>
                <FaPersonArrowDownToLine />
                <h3>
                    Lower
                </h3>
            </div>
        </nav>
    )
}