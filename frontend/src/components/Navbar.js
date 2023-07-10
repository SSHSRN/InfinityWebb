import { useEffect, useState } from 'react'
import "./Navbar.css"
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [signedIn, setSignedIn] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem("email")) {
            setSignedIn(true);
        }
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    let playVideo = false;
    const logout = async () => {
        sessionStorage.clear();
        setSignedIn(false);
        navigate("/");
    }
    const biFrost = (x) => {
        if (location.pathname === x) {
            return;
        }
        console.log("biFrost", x);
        document.querySelector(".App").style.height = "100vh";
        document.querySelector(".App").style.overflow = "hidden";
        const gradientOverlay = document.querySelector(".gradient-overlay");
        const video = document.querySelector(".bifrostVideo");
        console.log(gradientOverlay, video);
        setTimeout(function () {
            playVideo = true;
            console.log("timeout");
            console.log("playVideo before timeout", playVideo);
            gradientOverlay.style.opacity = "0";
            document.querySelector(".unityFrame") ? document.querySelector(".unityFrame").classList.add("is-hidden") : console.log("no unityFrame");
            document.querySelector('.heading') ? document.querySelector('.heading').classList.add("is-hidden") : console.log("no heading");
            document.querySelector('.survivalGame') ? document.querySelector('.survivalGame').classList.add("is-hidden") : console.log("no survivalGame");
            document.querySelector('.teamDetails') ? document.querySelector(".teamDetails").classList.add("is-hidden") : console.log("no teamDetails");
            document.querySelector(".contactUs") ? document.querySelector(".contactUsContainer").classList.add("is-hidden") : console.log("no contactUs");
            document.querySelector(".contactUs") ? document.querySelector(".contactUs").style.backgroundImage = "none" : console.log("no contactUs");
            document.querySelector(".contactUs") ? document.querySelector(".contactUs").style.backgroundColor = "white" : console.log("no contactUs");
            document.querySelector(".navbar").classList.add("is-hidden");
            document.querySelector(".App").style.backgroundColor = "#000000";
        }, 500);
        document.querySelector(".App").addEventListener("transitionend", function () {
            console.log("transitionend");
            console.log("playVideo after transitionend", playVideo);
            if (playVideo) {
                video.classList.remove("is-hidden");
                console.log("Removing is-hidden")
                video.play();
            }
        });
        video.addEventListener("ended", async function () {
            document.querySelector(".App").style.height = "auto";
            document.querySelector(".App").style.overflow = "auto";
            console.log("ended");
            playVideo = false;
            console.log("playVideo after ended", playVideo);
            video.classList.add("is-hidden");
            navigate(x);
            document.querySelector(".unityFrame") ? document.querySelector(".unityFrame").classList.remove("is-hidden") : console.log("no unityFrame");
            document.querySelector('.heading') ? document.querySelector('.heading').classList.remove("is-hidden") : console.log("no heading");
            document.querySelector('.survivalGame') ? document.querySelector('.survivalGame').classList.remove("is-hidden") : console.log("no survivalGame");
            document.querySelector('.teamDetails') ? document.querySelector(".teamDetails").classList.remove("is-hidden") : console.log("no teamDetails");
            document.querySelector(".contactUs") ? document.querySelector(".contactUsContainer").classList.remove("is-hidden") : console.log("no contactUs");
            document.querySelector(".navbar").classList.remove("is-hidden");
            document.querySelector(".App").style.removeProperty("background-color");
        });
    }
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://i.imgur.com/J8DU8H9.jpeg" alt="logo" width="50" height="80" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" onClick={() => biFrost('/')}>
                        Home
                    </a>
                    <a className="navbar-item" onClick={() => biFrost('/main')}>
                        VR World
                    </a>
                    <a className="navbar-item" onClick={() => biFrost('/survival')}>
                        Alien Planet Survival Game
                    </a>
                    <a className="navbar-item" onClick={() => biFrost('/team')}>
                        The Team
                    </a>
                    <a className="navbar-item" onClick={() => biFrost('/contact')}>
                        Contact Us
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        {!signedIn ?
                            (
                                <div className="buttons">
                                    <a className="button custom-color" href='/signup'>
                                        Sign up
                                    </a>
                                    <a className="button custom-color" href='/signin'>
                                        Log in
                                    </a>
                                </div>
                            ) : (
                                <div className="buttons">
                                    <a className="button is-danger" onClick={() => { logout() }}>
                                        Logout
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

