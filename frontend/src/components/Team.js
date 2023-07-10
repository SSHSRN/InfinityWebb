import "./Team.css";
import Navbar from "./Navbar";

const Team = () => {
    return (
        <section className="hero is-fullheight has-background-dark">
            <Navbar />
            <div className="hero-body teamDetails">
                <div className="container">
                    <div className="columns is-gapless is-vcentered">
                        {/* Card 1 */}
                        <div className="column is-half">
                            <div className="card memberCard">
                                <div className="card-content has-text-centered">
                                    <img
                                        src="./assets/srihari.jpg"
                                        alt="Srihari"
                                        className="teamMemberImage"
                                    />
                                    <h2 className="title is-4">Srihari S</h2>
                                    <h3 className="subtitle is-6">Full Stack Developer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam id nisi nec nisl convallis aliquam eget in enim.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="column is-half">
                            <div className="card memberCard">
                                <div className="card-content has-text-centered">
                                    <img
                                        src="./assets/christo.jpg"
                                        alt="Christo"
                                        className="teamMemberImage"
                                    />
                                    <h2 className="title is-4">E Christo Raymonde</h2>
                                    <h3 className="subtitle is-6">Game Developer</h3>
                                    <p>
                                        Pellentesque pellentesque, erat vitae feugiat facilisis,
                                        ipsum massa tristique turpis, sed volutpat enim magna vitae
                                        arcu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gradient-overlay"></div>
            <video src={'assets/bifrostVideo.mp4'} className="bifrostVideo is-hidden" muted></video>
        </section>
    );
};

export default Team;
