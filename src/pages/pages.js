import { WorkPreview } from "../components/galleryPreview";
import { NavGallery } from '../components/navComponents';
import { Link, Outlet } from "react-router-dom";



export const PageTitle = (props) => {
    return(
        <h1>{props.title}</h1>
    );
}

export const GalleryContent = (props) => {
    return(
        <div>
            {props.content.map((each,i) => (
                <WorkPreview 
                    key={i}
                    link={each.link}
                    image={each.image}
                    title={each.title}
                    skill={each.skill}
                    type={each.type}
                    context={each.context}    
                />
            ))}
        </div>
    );
}
export const Gallery = (props) => {
    return(
        <>
            <PageTitle title="Gallery" />
            <NavGallery/>
            <GalleryContent content={props.content}/>
            <Outlet />
        </>
    );
}
export const AboutMe = (props) => {
    return(
        <>
            <PageTitle title="About Me" />
        </>
    );
}
export const Resume = (props) => {
    return(
        <>
            <PageTitle title="Resume" />
        </>
    );
}