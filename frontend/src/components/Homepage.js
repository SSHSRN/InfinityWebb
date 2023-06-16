import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <div className="imgContainer">
                <div className='heading slowScrollDiv'>
                    <hr className="topHr1" />
                    <h1 className="topTitle is-centered">VR World</h1>
                    <hr className="topHr2" />
                </div>
                <img className='topBgImage' src="https://wallpaperaccess.com/full/1219598.jpg" alt="VR" />
            </div>
            <div className="content">
                <h1 className="title">Welcome to the VR World</h1>
                <p className="subtitle">A place where you can be anything you want to be</p>
            </div>
        </>
    )
}

export default Homepage