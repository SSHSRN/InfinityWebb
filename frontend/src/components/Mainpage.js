import Navbar from "./Navbar"
import "./Mainpage.css"
import { useEffect } from "react"


const Mainpage = () => {
    useEffect(() => {
        console.log(window.innerHeight);
        (window.innerHeight < 800)?document.querySelector(".unityFrame").style.height = "88vh": document.querySelector(".unityFrame").style.height = "85vh";
    }, [])
    return (
        <div className="mainPage">
            <Navbar className="navbar" />
            <iframe scrolling="no" className="unityFrame" src="https://v6p9d9t4.ssl.hwcdn.net/html/8096872/index.html" title="myFrame"></iframe>
            <div className="gradient-overlay"></div>
            <video src={'assets/bifrostVideo.mp4'} className="bifrostVideo is-hidden" muted></video>
        </div>
    )
}

export default Mainpage