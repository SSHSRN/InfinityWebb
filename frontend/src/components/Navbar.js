import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>
                    <a class="navbar-item">
                        About the Project
                    </a>
                    <a class="navbar-item">
                        The Team
                    </a>
                    <a class="navbar-item">
                        Contact Us
                    </a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button custom-color">
                                Sign up
                            </a>
                            <a class="button custom-color">
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

