import './Homepage.css'
import Navbar from './Navbar';

const Homepage = () => {
    const showImg1 = () => {
        document.querySelector('.BgImage1').style.opacity = '1';
        document.querySelector('.BgImage2').style.position = 'relative'
        document.querySelector('.BgImage2').style.transform = 'scale(1)';
    }
    const showImg2 = () => {
        document.querySelector('.BgImage1').style.opacity = '0';
        document.querySelector('.BgImage2').style.position = 'fixed';
        document.querySelector('.BgImage2').style.top = '0';
        document.querySelector('.BgImage2').style.left = '0';
        document.querySelector('.BgImage2').style.width = '100%';
        document.querySelector('.BgImage2').style.height = '100vh';
        document.querySelector('.BgImage2').style.zIndex = '-1';
        document.querySelector('.BgImage2').style.objectFit = 'cover';
    }
    document.addEventListener('scroll', () => {
        // zoom the image
        document.querySelector('.BgImage1').style.transform = `scale(${1 + window.scrollY / 10000})`;
        console.log(window.innerHeight);
        (window.scrollY > parseInt(parseInt(document.querySelector('.contentDiv').scrollHeight) + 2 * window.innerHeight)) ? showImg2() : showImg1();
        if (window.scrollY > parseInt(parseInt(document.querySelector('.title1').scrollHeight) + parseInt(document.querySelector('.content1').scrollHeight) + 2 * window.innerHeight)) {
            document.querySelector('.BgImage2').style.transform = 'scale(1.2)';
            document.querySelector('.imgContentDiv').style.height = '100vh';
            document.querySelector('.imgContentDiv').style.width = '100%';
            document.querySelector('.imgContentDiv').style.overflow = 'hidden';
        }
        if ((window.scrollY >= parseInt(parseInt(document.querySelector('.contentDiv').scrollHeight) + 2 * window.innerHeight))) {
            // image with class BgImage2 must resize from scale 1.5 to 1 smoothly on scroll
            document.querySelector('.BgImage2').style.transform = `scale(${1.2 - (window.scrollY - parseInt(parseInt(document.querySelector('.contentDiv').scrollHeight) + 2 * window.innerHeight)) / 10000})`;
        }
        if (window.scrollY > window.innerHeight) {
            document.querySelector('.topHr1').classList.add('is-hidden');
            document.querySelector('.topHr2').classList.add('is-hidden');
            document.querySelector('.topTitle').classList.add('is-hidden');
        }
        else {
            document.querySelector('.topHr1').classList.remove('is-hidden');
            document.querySelector('.topHr2').classList.remove('is-hidden');
            document.querySelector('.topTitle').classList.remove('is-hidden');
        }
    })
    window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            console.log('Scrolling up');
            this.document.querySelector('.navbar') ? this.document.querySelector('.navbar').classList.add('sticky') : void (0);
        }
        else if (event.deltaY > 0) {
            console.log('Scrolling down');
            this.document.querySelector('.navbar') ? this.document.querySelector('.navbar').classList.remove('sticky') : void (0);
        }
    });
    return (
        <>
            <div className="gradient-overlay"></div>
            <video src={'assets/bifrostVideo.mp4'} className="bifrostVideo is-hidden" muted></video>
            <Navbar />
            <div className="imgContainer">
                <div className='heading slowScrollDiv'>
                    <hr className="topHr1" />
                    <h1 className="topTitle is-centered">VR World</h1>
                    <hr className="topHr2" />
                </div>
                <img className='BgImage BgImage1' src="https://wallpaperaccess.com/full/1219598.jpg" alt="Background" />
            </div>
            <div className="contentDiv">
                <h1 className="title title1">Welcome to the VR World</h1>
                <p className="content content1">
                    Virtual reality (VR), the use of computer modeling and simulation that enables a person to interact with an artificial three-dimensional (3-D) visual or other sensory environment.<br /> VR applications immerse the user in a computer-generated environment that simulates reality through the use of interactive devices, which send and receive information and are worn as goggles, headsets, gloves, or body suits. In a typical VR format, a user wearing a helmet with a stereoscopic screen views animated images of a simulated environment. The illusion of “being there” (telepresence) is effected by motion sensors that pick up the user's movements and adjust the view on the screen accordingly, usually in real time (the instant the user's movement takes place). Thus, a user can tour a simulated suite of rooms, experiencing changing viewpoints and perspectives that are convincingly related to his own head turnings and steps. Wearing data gloves equipped with force-feedback devices that provide the sensation of touch, the user can even pick up and manipulate objects that he sees in the virtual environment.<br /><br />
                    The term virtual reality was coined in 1987 by Jaron Lanier, whose research and engineering contributed a number of products to the nascent VR industry. A common thread linking early VR research and technology development in the United States was the role of the federal government, particularly the Department of Defense, the National Science Foundation, and the National Aeronautics and Space Administration (NASA). Projects funded by these agencies and pursued at university-based research laboratories yielded an extensive pool of talented personnel in fields such as computer graphics, simulation, and networked environments and established links between academic, military, and commercial work.
                </p>
                <div className="splitSection">
                    <img className="img1" src="https://new.express.adobe.com/webpage/hWOmH3Bx4qMrp/resources/2197685a-cfb7-4619-9006-ce0baad03185?asset_id=2197685a-cfb7-4619-9006-ce0baad03185&image_assets=false&size=3840" alt="VR" />
                    <div className="imgYtDiv">
                        <img className="img2" src="https://new.express.adobe.com/webpage/hWOmH3Bx4qMrp/resources/315e5ab8-68bd-4da4-a404-3734634e42ce?asset_id=315e5ab8-68bd-4da4-a404-3734634e42ce&image_assets=false&size=1024" alt="VR" />
                        <img className="img2" src="https://new.express.adobe.com/webpage/hWOmH3Bx4qMrp/resources/315e5ab8-68bd-4da4-a404-3734634e42ce?asset_id=315e5ab8-68bd-4da4-a404-3734634e42ce&image_assets=false&size=1024" alt="VR" />
                    </div>
                </div>
            </div>
            <div className='imgContentDiv'>
                <img className='BgImage BgImage2' src='assets/1626298.jpg' alt='VR' />
            </div>
            <div className="contentDiv">
                <h1 className="title">VR Headsets</h1>
                <p className="content">
                    A virtual reality headset is a head-mounted device that provides virtual reality for the wearer. Virtual reality (VR) headsets are widely used with video games but they are also used in other applications, including simulators and trainers. They comprise a stereoscopic head-mounted display (providing separate images for each eye), stereo sound, and head motion tracking sensors (which may include gyroscopes, accelerometers, structured light systems, etc.). Some VR headsets also have eye tracking sensors and gaming controllers.
                </p>
                <div className="splitSection">
                    <img className="img1" src="https://cdn.wallpapersafari.com/42/47/pTynIJ.jpeg" alt="VR" />
                </div>
            </div>
        </>
    )
}

export default Homepage