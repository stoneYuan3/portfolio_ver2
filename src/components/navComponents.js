
import { useReducer } from "react";
import { Link } from "react-router-dom";


function setNavMainUI(currentPage,setPage){
    switch(setPage){
        case "gallery":
            return {
                gallery:true,
                about:false,
                resume:false
            };
        case "about":
            return {
                gallery:false,
                about:true,
                resume:false               
            };
        case "resume":
            return {
                gallery:false,
                about:false,
                resume:true               
            };    
        default:
            return currentPage;
    }
}

export const NavMain = () => {

    const initState = {
        gallery:true,
        about:false,
        resume:false
    }
    const [currentPage, setPage] = useReducer(setNavMainUI, initState);
    return (
        <header className="flex" id="react_nav">
            <nav className="flex">
                <div className="logo">
                    <Link onClick={() => setPage("gallery")} to="/">
                        <img src="/img/base/logo.svg" />
                        <p>Shucong Yuan</p>
                    </Link>
                </div>

                <div className="flex links-nav">
                    <Link onClick={() => setPage("gallery")} to="/" className={currentPage.gallery?"style-selected":""}>Gallery</Link>
                    <Link onClick={() => setPage("about")} to="/about" className={currentPage.about?"style-selected":""}>About Me</Link>
                    <Link onClick={() => setPage("resume")} to="/resume" className={currentPage.resume?"style-selected":""}>Resume</Link>
                </div>

                <div className="links-external">
                    <a className="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="/img/base/link-github.svg" />My Github</a>
                    <a className="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="/img/base/link-linkedin.svg" />My Linkedin</a>
                </div>

                <div className="links-external links-external-small">
                    <a className="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="/img/base/link-github.svg" /></a>
                    <a className="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="/img/base/link-linkedin.svg" /></a>
                </div>
            </nav>

        </header>
    );
}





function setNavSideUI(currentPage,setPage){
    switch(setPage){
        case "programming":
            return {
                programming:true,
                uiux:false,
                graphic:false
            };
        case "uiux":
            return {
                programming:false,
                uiux:true,
                graphic:false               
            };
        case "graphic":
            return {
                programming:false,
                uiux:false,
                graphic:true               
            };    
        default:
            return currentPage;
    }
}

export const NavGallery = (props) => {
    var initState={};
    switch(props.page){
        case "programming":
            initState = {
                programming:true,
                uiux:false,
                graphic:false
            }
            break;
        case "uiux":
            initState = {
                programming:false,
                uiux:true,
                graphic:false
            }
            break;
        case "graphic":
            initState = {
                programming:false,
                uiux:false,
                graphic:true
            }
            break;
        default:
            initState = {
                programming:false,
                uiux:false,
                graphic:false
            }   
            break;
    }

    const [currentPage, setPage] = useReducer(setNavSideUI, initState);

    return (
        <div className="flex flex-row" id="react-nav-gallery">
            <Link onClick={() => setPage("programming")} to="/" className={currentPage.programming?"style-selected":""}>Programming Related</Link>
            <Link onClick={() => setPage("uiux")} to="/gallery/uiux" className={currentPage.uiux?"style-selected":""}>UI/UX Design</Link>
            <Link onClick={() => setPage("graphic")} to="/gallery/graphic" className={currentPage.graphic?"style-selected":""}>Graphic Design</Link>
        </div>
    )
}