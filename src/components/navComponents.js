
import { Link, Outlet } from "react-router-dom";


export const NavMain = () => {

    return (
        <header className="flex" id="react_nav">
            <nav className="flex">
                <div className="logo">
                    <a href="index.html">
                        <img src="img/base/logo.svg" />
                        <p>Shucong Yuan</p>
                    </a>
                </div>

                <div className="flex links-nav">
                    <Link to="/" className="style-selected">Gallery</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/resume">Resume</Link>
                </div>

                <div className="links-external">
                    <a className="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="img/base/link-github.svg" />My Github</a>
                    <a className="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="img/base/link-linkedin.svg" />My Linkedin</a>
                </div>

                <div className="links-external links-external-small">
                    <a className="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="img/base/link-github.svg" /></a>
                    <a className="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="img/base/link-linkedin.svg" /></a>
                </div>
            </nav>
        </header>
    );
}


export const NavGallery = () => {
    return(
        <div className="flex flex-row" id="react-nav-gallery">
            <Link to="/" className="style-selected">Programming Related</Link>
            <Link to="/gallery/uiux">UI/UX Design</Link>
            <Link to="/gallery/artwork">Artworks</Link>
        </div>
    )
}