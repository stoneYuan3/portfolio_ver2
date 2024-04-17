import { Link } from "react-router-dom";
 

export const WorkIntro = (props) => {
    return(
        <>  
            <img id="banner" src={props.banner} />
            <a id="link-work-github" className="flex flex-align-center" href={props.linkHref}>
                <img src={props.linkIcon} />{props.linkTitle}
            </a>
            <div className="section-work-basics">
                <div class="sectionList">
                    <h3>Type:</h3>
                    <p>{props.workType}</p>
                </div>
                <div class="sectionList">
                    <h3>Skills involved:</h3>
                    <p>{props.workSkill}</p>
                </div>
                <div class="sectionList">
                    <h3>Context:</h3>
                    <p>{props.workContext}</p>
                </div>
            </div>
        </>
    );
}

export const WorkIntroNoLink = (props) => {
    return(
        <>
        <img id="banner" src={props.banner} />
        <div className="section-work-basics">
            <div class="sectionList">
                <h3>Type:</h3>
                <p>{props.workType}</p>
            </div>
            <div class="sectionList">
                <h3>Skills involved:</h3>
                <p>{props.workSkill}</p>
            </div>
            <div class="sectionList">
                <h3>Context:</h3>
                <p>{props.workContext}</p>
            </div>
        </div>
    </>       
    );
}
export const WorkIntroNoBanner = (props) => {
    return (
        <div className="section-work-basics">
            <div class="sectionList">
                <h3>Type:</h3>
                <p>{props.workType}</p>
            </div>
            <div class="sectionList">
                <h3>Skills involved:</h3>
                <p>{props.workSkill}</p>
            </div>
            <div class="sectionList">
                <h3>Context:</h3>
                <p>{props.workContext}</p>
            </div>
        </div>
    );
}

export const WorkIntroBoxWrapper = () => {
    return (
        <div className="section-work-basics workIntroBox">
            
        </div>
    );
}
export const WorkIntroBox = (props) => {

    //plan:
    //receive something like this in props for the external links
        // links={
        //     [
        //         ['github','Github Repo','https://github.com/teamsela/sela-web'],
        //         ['general','Team Website','https://biblepoetry.org/']
        //     ]
        // }

    // var links;
    // if(props.link){
    //     for(let i=0;i<props.link.len();i++){
    //         for(let j=0;j<props.link[i].len();j++){
    //             switch(props.link[i][0]){
    //                 case "github":

    //             }
    //         }
            
    //     }
    // }
    // else{
    //     links=false;
    // }

    return (
        <>
            {/* <div className="section-work-basics workIntroBox"> */}
                <div className="sectionList workIntro">
                    <div className="introColumn">
                        <div>
                            <h3>Type:</h3>
                            <p>{props.workType}</p>
                        </div>
                        <div>
                            <h3>Skills:</h3>
                            <p>{props.workSkill}</p>
                        </div>
                    </div>
                    <div className="introColumn">
                        <div>
                            <h3>Context:</h3>
                            <p>{props.workContext}</p>
                        </div>
                        <div>
                            <h3>Time:</h3>
                            <p>{props.time}</p>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}


// export const WorkIntro = (props) => {
//     return(
//         <>  
//             <img id="banner" src={props.banner} />
//             <a id="link-work-github" className="flex flex-align-center" href={props.linkHref}>
//                 <img src={props.linkIcon} />{props.linkTitle}
//             </a>
//             <div className="section-work-basics">
//                 <p id="work-type" className="p-type">{props.workType}</p>
//                 <p id="work-skill">{props.workSkill}</p>
//                 <p id="work-desc">{props.workContext}</p>
//             </div>
//         </>
//     );
// }
// export const WorkIntroNoLink = (props) => {
//     return(
//         <>
//         <img id="banner" src={props.banner} />
//         <div className="section-work-basics">
//             <p id="work-type" className="p-type">{props.workType}</p>
//             <p id="work-skill">{props.workSkill}</p>
//             <p id="work-desc">{props.workContext}</p>
//         </div>
//     </>       
//     );
// }

// export const WorkIntroNoBanner = (props) => {
//     return (
//         <div className="section-work-basics">
//             <p id="work-type" className="p-type">{props.workType}</p>
//             <p id="work-skill">{props.workSkill}</p>
//             <p id="work-desc">{props.workContext}</p>
//         </div>
//     );
// }

export const BackToGallery=(props)=>{
    return(
        <Link to={props.link} className="button-general">Back</Link>
    );
}