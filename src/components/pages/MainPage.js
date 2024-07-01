import { Link } from "react-router-dom";
import "../../scss/pages/MainPage.scss";
import { useEffect } from "react";
import $ from "jquery";
import Footer from "../common/Footer";

export default function MainPage(){

    useEffect(() => {
        $(document).ready(function(){
            $('#nav-icon').click(function(){ 
                $(this).toggleClass('open');
                $(".overlay").toggleClass("open");
                $(".overlay a").toggleClass("open");
                $(".overlay p").toggleClass("open");
            });
        });

        const squares = document.querySelectorAll('.square.blue');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        squares.forEach(square => {
            observer.observe(square);
        });

        return () => {
            squares.forEach(square => {
                observer.unobserve(square);
            });
        };
    }, []);

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="MainPage-container">
            <div className="background">
                <nav>
                    <div className="navWrapper">
                        <Link to="/" id="logo">DHHM</Link>
                        <div className="right">
                            <div id="nav-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="overlay">
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
                <div className="header">
                    <div className="headerWrapper">
                        <h6>DHHM</h6>
                        <h1>DH's <br /> Health Management</h1>
                        <div className="circle blue"></div>
                        <div className="square red"></div>
                        <div className="triangle green">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 177.893 177.893">
                                <defs>
                                    <style>{".a{fill:url(#a);}.b{filter:url(#b);}"}</style>
                                    <linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stopColor="#3dbed5"/>
                                        <stop offset="1" stopColor="#3dd55a"/>
                                    </linearGradient>
                                    <filter id="b" x="0" y="0" width="177.893" height="177.893" filterUnits="userSpaceOnUse">
                                        <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                        <feGaussianBlur stdDeviation="7.5" result="c"/>
                                        <feFlood floodColor="#3dd55a" floodOpacity="0.396"/>
                                        <feComposite operator="in" in2="c"/>
                                        <feComposite in="SourceGraphic"/>
                                    </filter>
                                </defs>
                                <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
                                    <path className="a" d="M136.727,21104.928l-50.222,100h100Z" transform="translate(-8978.23 -19029.24) rotate(-25)"/>
                                </g>
                            </svg>
                        </div>
                        <div className="circle orange"></div>
                    </div>
                </div>
            </div>
            <div className="section services">
                <div className="sectionWrapper">
                    <h6>What's On The Site ? </h6>
                    <h2>DHHM's Menu</h2>
                    <p className="description">
                        DHHM's Information
                    </p>
                    <div className="square blue"></div>
                    <div className="grid">
                        <div className="card">
                            <h3>건강상식</h3>
                            <p>
                                알아두면 쓸모 있는 건강 상식.
                            </p>
                        </div>
                        <div className="card">
                            <h3>테이핑</h3>
                            <p>
                                부상 방지와 치료.
                            </p>
                        </div>
                        <div className="card">
                            <h3>마사지</h3>
                            <p>
                                부상 예방과 체력관리.
                            </p>
                        </div>
                        <div className="card">
                            <h3>재활운동</h3>
                            <p>
                                운동 기능 회복 및 유지.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}