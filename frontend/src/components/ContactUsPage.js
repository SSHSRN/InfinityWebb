import { useState } from 'react';
import './ContactUsPage.css';
import Navbar from './Navbar';

const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', name, email, message);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="hero is-fullheight has-background-dark contactUs">
            <Navbar />
            <div className="container contactUsContainer">
                <h1 className="title">Contact Us</h1>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <form onSubmit={handleSubmit} className='feedbackForm'>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button className="button is-primary" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="gradient-overlay"></div>
            <video src={'assets/bifrostVideo.mp4'} className="bifrostVideo is-hidden" muted></video>
        </section>
    );
};

export default ContactUsPage;