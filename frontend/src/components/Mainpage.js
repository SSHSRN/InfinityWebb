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
        <div>
            <Navbar />
            <iframe scrolling="no" className='unityFrame' src="https://v6p9d9t4.ssl.hwcdn.net/html/8096872/index.html" title="myFrame"></iframe>
        </div>
    )
}

export default Mainpage