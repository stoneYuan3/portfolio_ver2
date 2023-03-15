import { Link } from "react-router-dom";
 

export const WorkIntro = (props) => {
    return(
        <>  
            <img id="banner" src={props.banner} />
            <a id="link-work-github" className="flex flex-align-center" href={props.linkHref}>
                <img src={props.linkIcon} />{props.linkTitle}
            </a>
            <div className="section-work-basics">
                <p id="work-type" className="p-type">{props.workType}</p>
                <p id="work-skill">{props.workSkill}</p>
                <p id="work-desc">{props.workContext}</p>
            </div>
        </>
    );
}


export const WorkIntroNoLink = (props) => {
    return(
        <>
        <img id="banner" src={props.banner} />
        <div className="section-work-basics">
            <p id="work-type" className="p-type">{props.workType}</p>
            <p id="work-skill">{props.workSkill}</p>
            <p id="work-desc">{props.workContext}</p>
        </div>
    </>       
    );
}

export const WorkIntroNoBanner = (props) => {
    return (
        <div className="section-work-basics">
            <p id="work-type" className="p-type">{props.workType}</p>
            <p id="work-skill">{props.workSkill}</p>
            <p id="work-desc">{props.workContext}</p>
        </div>
    );
}

export const BackToGallery=(props)=>{
    return(
        <Link to={props.link} className="button-general">Back to Gallery</Link>
    );
}