
import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";

export const scrollToTop = () => {
    window.scrollTo(0, 0)
}

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
                    {/* <Link onClick={() => {setPage("gallery"); scrollToTop(); NavGallery.resetPage()}} to={homelink}> */}
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





// function setNavSideUI(currentPage,setPage){
//     switch(setPage){
//         case "programming":
//             return {
//                 programming:true,
//                 uiux:false,
//                 graphic:false
//             };
//         case "uiux":
//             return {
//                 programming:false,
//                 uiux:true,
//                 graphic:false               
//             };
//         case "graphic":
//             return {
//                 programming:false,
//                 uiux:false,
//                 graphic:true               
//             };    
//         default:
//             return currentPage;
//     }
// }

// export const NavGallery = (props,type) => {
//     var initState={};
//     switch(type){
//         case "webdev":
//             console.log('webdev nav');
//             break;
//         default:
//             console.log('default');
//             break;
//     }
    
//     switch(props.page){
//         case "programming":
//             initState = {
//                 programming:true,
//                 uiux:false,
//                 graphic:false
//             }
//             break;
//         case "uiux":
//             initState = {
//                 programming:false,
//                 uiux:true,
//                 graphic:false
//             }
//             break;
//         case "graphic":
//             initState = {
//                 programming:false,
//                 uiux:false,
//                 graphic:true
//             }
//             break;
//         default:
//             initState = {
//                 programming:false,
//                 uiux:false,
//                 graphic:false
//             }   
//             break;
//     }
//     const [currentPage, setPage] = useReducer(setNavSideUI, initState);

//     return (
//         <div className="flex flex-row" id="react-nav-gallery">
//             <Link onClick={() => setPage("programming")} to="/" className={currentPage.programming?"style-selected":""}>Programming Related</Link>
//             <Link onClick={() => setPage("uiux")} to="/uiux" className={currentPage.uiux?"style-selected":""}>UI/UX Design</Link>
//             <Link onClick={() => setPage("graphic")} to="/graphic" className={currentPage.graphic?"style-selected":""}>Graphic Design</Link>
//         </div>
//     )
// }

function setNavSideUI(currentPage,setPage){
    switch(setPage){
        case "main":
            return {
                main:true,
                side1:false,
                side2:false,
            };
        case "side1":
            return {
                main:false,
                side1:true,
                side2:false,         
            };  
        case "side2":
            return {
                main:false,
                side1:false,   
                side2:true,                       
            };  
        default:
            return currentPage;
    }
}
export const navGallerySetPage = () => {

}
export const NavGallery = (props) => {
    var initState={};
    var propPage=props.page;
    //solving issue: click logo when on side gallery nav doesnt update gallery nav
    // function resetPage(){
    //     propPage="main";
    // }
    switch(propPage){
        case "main":
            initState = {
                main:true,
                side1:false,
                side2:false,
            }
            break;
        case "side1":
            initState = {
                main:false,
                side1:true,
                side2:false,
            }
            break;
        case "side2":
            initState = {
                main:false,
                side1:false,
                side2:true,
            }
            break;
        default:
            initState = {
                main:false,
                side1:false,
                side2:false,
            }   
            break;
    }
    const [currentPage, setPage] = useReducer(setNavSideUI, initState);
    var backlink = props.backlink;
    var navStructure;
    switch(props.navType){
        case "webdev":
            navStructure=(
                <div className="flex flex-row" id="react-nav-gallery">
                    <Link onClick={() => setPage("main")} to={backlink} className={currentPage.main?"style-selected":""}>Programming Related</Link>
                    <Link onClick={() => setPage("side1")} to={backlink+"/design"} className={currentPage.side1?"style-selected":""}>Design & More</Link>
                </div>
            );
            break;
        
        case "design":
            navStructure=(
                <div className="flex flex-row" id="react-nav-gallery">
                    <Link onClick={() => setPage("main")} to={backlink} className={currentPage.main?"style-selected":""}>Design Projects</Link>
                    <Link onClick={() => setPage("side1")} to={backlink+"/beyondDesign"} className={currentPage.side1?"style-selected":""}>Beyond Design</Link>
                </div>
            );
            break;
        case "general":
            navStructure=(
                <div className="flex flex-row" id="react-nav-gallery">
                    <Link onClick={() => setPage("main")} to={backlink} className={currentPage.main?"style-selected":""}>Relevant Projects</Link>
                    <Link onClick={() => setPage("side1")} to={backlink+"/others"} className={currentPage.side1?"style-selected":""}>Other Projects</Link>
                </div>
            );
            break;
        default:
            navStructure=(
                <div className="flex flex-row" id="react-nav-gallery">
                    <Link onClick={() => setPage("main")} to="/" className={currentPage.main?"style-selected":""}>Programming Related</Link>
                    <Link onClick={() => setPage("side1")} to="/uiux" className={currentPage.side1?"style-selected":""}>UI/UX Design</Link>
                    <Link onClick={() => setPage("side2")} to="/graphic" className={currentPage.side2?"style-selected":""}>Graphic Design & Beyond</Link>
                </div>
            );
            break;
    }

    return navStructure;
}