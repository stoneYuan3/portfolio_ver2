
import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";


function setNavMainUI(currentPage,setPage){
    switch(setPage){
        case "gallery":
            return {
                gallery:true,
                about:false,
                resume:false,
                playground:false,
            };
        case "about":
            return {
                gallery:false,
                about:true,
                resume:false,
                playground:false,             
            };
        case "resume":
            return {
                gallery:false,
                about:false,
                resume:true,
                playground:false,            
            };    
        case "playground":
            return {
                gallery:false,
                about:false,
                resume:false,
                playground:true,               
            };   
        default:
            return currentPage;
    }
}

export const NavMain = (props) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    var homelink="";
    if(props.homelink!=null){
        homelink=props.homelink;
    }
    else{
        homelink="/";
    }

    const initState = {
        gallery:true,
        about:false,
        resume:false
    }
    const [currentPage, setPage] = useReducer(setNavMainUI, initState);
    return (
        <>
        <header className="flex" id="react_nav">
            <nav className="flex">
                <div className="logo">
                    <Link onClick={() => {setPage("gallery"); scrollToTop();}} to={homelink}>
                        <img src="/img/base/logo.svg" />
                        <p>Jack Yuan</p>
                    </Link>
                </div>

                <div className="flex links-nav">
                    <Link onClick={() => {setPage("gallery"); scrollToTop();} } to={homelink} className={currentPage.gallery?"style-selected":""}>Gallery</Link>
                    <Link onClick={() => {setPage("about"); scrollToTop();}} to="about" className={currentPage.about?"style-selected":""}>About Me</Link>
                    <Link onClick={() => {setPage("playground"); scrollToTop();}} to="playground" className={currentPage.playground?"style-selected":""}>Playground</Link>
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
        <Outlet />
        </>
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

export const NavGallery = (props,type) => {
    var initState={};
    switch(type){
        case "webdev":
            console.log('webdev nav');
            break;
        default:
            console.log('default');
            break;
    }
    
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
            <Link onClick={() => setPage("uiux")} to="/uiux" className={currentPage.uiux?"style-selected":""}>UI/UX Design</Link>
            <Link onClick={() => setPage("graphic")} to="/graphic" className={currentPage.graphic?"style-selected":""}>Graphic Design</Link>
        </div>
    )
}

function setNavSideUIWebdev(currentPage,setPage){
    switch(setPage){
        case "webdev":
            return {
                webdev:true,
                design:false,
            };
        case "design":
            return {
                webdev:false,
                design:true,             
            };  
        default:
            return currentPage;
    }
}
export const NavGalleryWebdev = (props) => {
    var initState={};
    switch(props.page){
        case "webdev":
            initState = {
                webdev:true,
                design:false,
            }
            break;
        case "design":
            initState = {
                webdev:false,
                design:true,
            }
            break;
        default:
            initState = {
                webdev:false,
                design:false,
            }   
            break;
    }
    const [currentPage, setPage] = useReducer(setNavSideUIWebdev, initState);
    var backlink = props.backlink;

    return (
        <div className="flex flex-row" id="react-nav-gallery">
            <Link onClick={() => setPage("webdev")} to={backlink} className={currentPage.webdev?"style-selected":""}>Programming Related</Link>
            <Link onClick={() => setPage("design")} to={backlink+"/design"} className={currentPage.design?"style-selected":""}>Design & More</Link>
        </div>
    )
}