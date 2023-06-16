import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    let playVideo = false;
    const biFrost = (x) => {
        console.log("biFrost", x);
        const gradientOverlay = document.querySelector(".gradient-overlay");
        const video = document.querySelector(".bifrostVideo");
        console.log(gradientOverlay, video);
        setTimeout(function() {
            playVideo = true;
            console.log("timeout");
            console.log("playVideo before timeout", playVideo);
            gradientOverlay.style.opacity = "0";
            document.querySelector(".unityFrame").classList.add("is-hidden");
            document.querySelector(".navbar").classList.add("is-hidden");
            document.querySelector(".App").style.backgroundColor = "#000000";
        }, 500);
        document.querySelector(".App").addEventListener("transitionend", function() {
            console.log("transitionend");
            console.log("playVideo after transitionend", playVideo);
            if(playVideo) {
                video.classList.remove("is-hidden");
                video.play();
            }
        });
        video.addEventListener("ended", async function() {
            console.log("ended");
            playVideo = false;
            console.log("playVideo after ended", playVideo);
            video.classList.add("is-hidden");
            navigate(x);
            document.querySelector(".unityFrame").classList.remove("is-hidden");
            document.querySelector(".navbar").classList.remove("is-hidden");
            document.querySelector(".App").style.backgroundColor = "#ffffff";
        });
    }
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" onClick={()=>biFrost('/')}>
                        Home
                    </a>
                    <a className="navbar-item" onClick={()=>biFrost('/main')}>
                        VR World
                    </a>
                    <a className="navbar-item" onClick={()=>biFrost('/team')}>
                        The Team
                    </a>
                    <a className="navbar-item" onClick={()=>biFrost('/contact')}>
                        Contact Us
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button custom-color">
                                Sign up
                            </a>
                            <a className="button custom-color">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

