import "../../scss/common/Header.scss";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Header({ title, content, category }) {
    
    const handleLogoClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const navIconRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const navIcon = navIconRef.current;
        const overlay = overlayRef.current;

        const handleNavIconClick = () => {
            navIcon.classList.toggle('open');
            overlay.classList.toggle('open');
            const overlayLinks = overlay.querySelectorAll("a");
            const overlayParagraphs = overlay.querySelectorAll("p");

            overlayLinks.forEach(link => link.classList.toggle('open'));
            overlayParagraphs.forEach(paragraph => paragraph.classList.toggle('open'));
        };

        if (navIcon) {
            navIcon.addEventListener('click', handleNavIconClick);
        }

        return () => {
            if (navIcon) {
                navIcon.removeEventListener('click', handleNavIconClick);
            }
        };
    }, []);

    return (
        <div className="Header-container">
            <header>
                <h2>{content}</h2>
                <h1>{title}</h1>
                {
                    category && <h3>- {category} -</h3>
                }
                <span onClick={handleLogoClick}><FaArrowAltCircleDown /></span>
            </header>
            <nav>
                <div className="navWrapper">
                    <Link to="/" id="logo">DHHM</Link>
                    <div className="center">{title}</div>
                    <div className="right">
                        <div id="nav-icon" ref={navIconRef}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="overlay" ref={overlayRef}>
                            <div className="overlayContent">
                                <Link to="/CommonSense" id="menu-one">건강상식</Link>
                                <Link to="/Taping" id="menu-two">테이핑</Link>
                                <Link to="/Massage" id="menu-three">마사지</Link>
                                <Link to="/Rehabilitation" id="menu-four">재활운동</Link>
                                <p>Copyright 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}