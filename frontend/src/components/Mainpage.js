import Navbar from "./Navbar"
import "./Mainpage.css"
import { useEffect } from "react"
import $ from 'jquery';


const Mainpage = () => {
    useEffect(() => {
        $(document).ready(function () {
            console.log("ready!");
            $('iframe').on('load', function () {
                console.log($('iframe').contents().find('html').html())
            });
        });
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