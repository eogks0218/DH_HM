import React, { useEffect } from "react";
import "../../scss/common/Footer.scss";
import { FaHome, FaTape } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbMassage } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RxDoubleArrowUp } from "react-icons/rx";

export default function Footer(){

    useEffect(() => {
        const menu = document.querySelector("#menu");
        const gallery = document.querySelector("#gallery");

        const menuClick = () => {
            document.querySelector("#box").classList.remove("box-show");
            const boxLines = document.querySelectorAll(".box-line");
            const navItems = document.querySelectorAll(".nav-items");

            boxLines.forEach(boxLine => boxLine.classList.remove("box-line-show"));
            navItems.forEach(navItem => navItem.classList.toggle("show-menu"));
        }

        const boxClick = () => {
            document.querySelector("#box").classList.toggle("box-show");
            const boxLines = document.querySelectorAll(".box-line");
            const navItems = document.querySelectorAll(".nav-items");

            boxLines.forEach(boxLine => boxLine.classList.toggle("box-line-show"));
            navItems.forEach(navItem => navItem.classList.remove("show-menu"));
        }

        if (menu && gallery) {
            menu.addEventListener("click", menuClick);
            gallery.addEventListener("click", boxClick);
        }

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            if (menu && gallery) {
                menu.removeEventListener("click", menuClick);
                gallery.removeEventListener("click", boxClick);
            }
        };
    }, []);

    useEffect(()=> {
        const handleScroll = () => {
            const footer = document.querySelector("#footer");
            if(footer){
                const scrollTop = document.documentElement.scrollTop;
                if(scrollTop > 200){
                    footer.classList.add("footer-show");
                    footer.classList.remove("footer-hide");
                }else{
                    footer.classList.remove("footer-show");
                    footer.classList.add("footer-hide");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const moveScroll = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    }


    return(
        <footer id="footer">
            <div className="wrapper">
                <div className="item menu" id="menu">
                    <div className="linee linee1"></div>
                    <div className="linee linee2"></div>
                    <div className="linee linee3"></div>
                </div>
                <div className="item gallery" id="gallery">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                    <div className="dot dot4"></div>
                    <div className="dot dot5"></div>
                    <div className="dot dot6"></div>
                </div>
                <div className="toTop" onClick={moveScroll}>
                    <RxDoubleArrowUp />
                </div>
                <div className="nav-items items1">
                    <Link to="/"><FaHome /></Link>
                </div>
                <div className="nav-items items2">
                    <Link to="/CommonSense"><RiMentalHealthFill /></Link>
                </div>
                <div className="nav-items items3">
                    <Link to="/Taping"><FaTape /></Link>
                </div>
                <div className="nav-items items4">
                    <Link to="/Massage"><TbMassage /></Link>
                </div>
                <div className="nav-items items5">
                    <Link to="/Rehabilitation"> <GiHealing /></Link>
                </div>
                <div className="box" id="box">
                    <div className="box-line box-line1">CONTACT</div>
                    <div className="box-line box-line2">📞 010-9288-1660</div>
                    <div className="box-line box-line3">📧 eogks0218@naver.com</div>
                    <div className="box-line box-line4">📌 Ansan, Gyeonggi, Korea</div>
                </div>
            </div>
        </footer>
    )
}