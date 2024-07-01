import { useEffect } from "react";
import "../../scss/CommonSense.scss";

export default function CommonSenseTab({handleCategoryChange}){

    useEffect(() => {
        const handleDOMContentLoaded = () => {
            const navigationTabItems = document.querySelectorAll('.navigation-tab-item');
    
            if (navigationTabItems.length === 0) {
                console.error('No navigation-tab-item elements found');
                return;
            }
    
            const handleClick = (event) => {
                // 모든 항목에서 active 클래스 제거
                navigationTabItems.forEach(tab => tab.classList.remove('active'));
                
                // 클릭된 항목에 active 클래스 추가
                event.currentTarget.classList.add('active');
                
                // 클릭된 항목 이전의 형제 요소들의 개수 계산
                let prevSiblingsCount = 0;
                let prevSibling = event.currentTarget.previousElementSibling;
                while (prevSibling) {
                    prevSiblingsCount++;
                    prevSibling = prevSibling.previousElementSibling;
                }
                
                // .navigation-tab-overlay의 left 속성 설정
                const overlayWidth = window.innerWidth <= 767 ? 68 : 130; // 반응형 넓이 적용
                document.querySelector('#navigation-tab-overlay').style.left = `${prevSiblingsCount * overlayWidth}px`;
            };
    
                navigationTabItems.forEach(item => {
                    item.addEventListener('click', handleClick);
                });
    
            // Clean up 이벤트 리스너
            return () => {
                navigationTabItems.forEach(item => {
                    item.removeEventListener('click', handleClick);
                });
            };
        };
    
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
        } else {
            handleDOMContentLoaded();
        }
    }, []);
    

    return(
        <nav className="navigation-tab">
            <div className="navigation-tab-item active" onClick={()=>handleCategoryChange("general")}>
                <span className="navigation-tab__icon">G</span>
                <span className="navigation-tab__txt">General</span>
            </div>
            <div className="navigation-tab-item" onClick={()=>handleCategoryChange("diet")}>
                <span className="navigation-tab__icon">D</span>
                <span className="navigation-tab__txt">Diet</span>
            </div>
            <div className="navigation-tab-item" onClick={()=>handleCategoryChange("skin")}>
                <span className="navigation-tab__icon">S</span>
                <span className="navigation-tab__txt">Skin</span>
            </div>
            <div className="navigation-tab-item" onClick={()=>handleCategoryChange("exercise")}>
                <span className="navigation-tab__icon">E</span>
                <span className="navigation-tab__txt">Exercise</span>
            </div>
            <div className="navigation-tab-overlay" id="navigation-tab-overlay"></div>
        </nav>
    )
}