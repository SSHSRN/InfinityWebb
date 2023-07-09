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
        if (window.scrollY > parseInt(parseInt(document.querySelector('.homeIntro1').scrollHeight) + parseInt(document.querySelector('.content1').scrollHeight) + 2 * window.innerHeight)) {
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
                    <h1 className="topTitle is-centered">Infinity Webb</h1>
                    <hr className="topHr2" />
                </div>
                <img className='BgImage BgImage1' src="https://wallpaperaccess.com/full/1219598.jpg" alt="Background" />
            </div>
            <div className="contentDiv">
                <h1 className="homeIntro1">Welcome to the Infinity Webb</h1>
                <p className="content content1">
                    Explore the vast cosmos and embark on thrilling journeys through our interactive space-themed website. Prepare to be captivated by a multitude of engaging features that will transport you to distant galaxies and provide endless entertainment. Whether you're a fan of games, interactive stories, or simply enjoy the wonders of the universe, our website has something special for everyone.
                    <br /><br />
                    Text Game with Interactive Storyline
                    <br /><br />
                    If you're a fan of immersive storytelling, our text-based game is especially for you. You'll be able to choose your own path and make decisions that will affect the outcome of the story. With a variety of different endings, you'll be able to play the game multiple times and experience a different story each time. The game is set in an alien world, and you must decide if you want to stay on the planet for the rest of your life or return to Earth. The game is filled with twists and turns, and you'll never know what will happen next.
                    <br /><br />
                    Telegram Bot
                    <br /><br />
                    Our Telegram bot is a great way to get updated with the sunrise and sunset times of your location, which is especially useful for those who are interested in astronomy and those who are interested in sunrise and sunset photography or those who plan their trips around the sunrise and sunset times. The bot also provides information about the International Space Station (ISS) and the scientists who are currently on board.
                </p>
                <div className="splitSection">
                    <img className="img1" src="./assets/homepage0.jpg" alt="VR" />
                    <div className="imgYtDiv">
                        <img className="img2" src="./assets/homepage1.jpg" alt="VR" />
                        <img className="img2" src="./assets/homepage2.jpg" alt="VR" />
                    </div>
                </div>
            </div>
            <div className='imgContentDiv'>
                <img className='BgImage BgImage2' src='assets/1626298.jpg' alt='VR' />
            </div>
            <div className="contentDiv">
                <h1 className="homeIntro1">Downloadable Game</h1>
                <p className="content">
                    A downloadable game and an online-playable version of the same is also publised..
                    ## Christo ## Add more content here
                </p>
                <div className="splitSection">
                    <img className="img1" src="https://cdn.wallpapersafari.com/42/47/pTynIJ.jpeg" alt="VR" />
                </div>
            </div>
        </>
    )
}

export default Homepage