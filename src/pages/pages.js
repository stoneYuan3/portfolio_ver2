import { WorkPreview, PlaygroundPreview } from "../components/galleryPreview";
import { NavGallery,NavGalleryWebdev } from '../components/navComponents';
import { Link, Outlet } from "react-router-dom";



export const PageTitle = (props) => {
    return(
        <h1>{props.title}</h1>
    );
}
export const PageTitleWithSub = (props) => {
    return(
        <div className="titleWithSub">
            <h1>{props.title}</h1>
            <p>{props.sub}</p>
        </div>
    );
}

export const GalleryContent = (props) => {
    if(props.type=="playground"){
        return(
            <div class="playgroundWrapper">
                {props.content.map((each,i) => (
                    <PlaygroundPreview 
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
    else{
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
}
export const Gallery = (props) => {
    return(
        <>
            <PageTitle title="Gallery" />
            <NavGallery page={props.page}/>
            <GalleryContent content={props.content}/>
            <Outlet />
        </>
    );
}
export const GalleryWebdev = (props) => {
    return(
        <>
            <PageTitle title="Gallery" />
            <NavGalleryWebdev page={props.page} backlink={props.backlink}/>
            <GalleryContent content={props.content}/>
            <Outlet />
        </>
    );
}
export const GalleryNoNav = (props) => {
    return(
        <>
            <PageTitle title="Gallery" />
            <GalleryContent content={props.content}/>
            <Outlet />
        </>
    );
}


export const Playground = (props) => {
    return(
        <div className="playground">
            <PageTitleWithSub title="Playground" sub="Hobby projects, volunteer projects, everything that I've done in my own time."/>
            <GalleryContent content={props.content} type="playground"/>
            <Outlet />
        </div>
    );
}



export const AboutMe = (props) => {
    return(
        <>
            <PageTitle title="About Me" />
            <div className="flex flex-column section-contentDisplay">
                <section className="flex flex-column section-about">
                    <div className="flex flex-row section-mybio">
                        {/* <img src="/img/about-portrait.png" /> */}
                        <div className="flex flex-column">
                            <h2>Jack (Shucong) Yuan</h2>
                            <p><strong>Email: </strong>jack_yuan@sfu.ca (Preferred)</p>
                            <p><strong>Telephone: </strong>778-223-9805</p>
                        </div>
                    </div>
                    <p>
                        Studying at Simon Fraser University's School of Interactive Arts and Technology(SIAT), a program that combines art <em>(3D Animation, Special Effects, filmmaking)</em>, design <em>(Graphic design, UX Design)</em> and technology <em>(Web Development)</em>.
                    </p>
                    <p>
                        Have skills in both Web development, UI/UX and graphic design thanks to SIAT's diverse course offerings. Likes to learn more about programming and do handcrafts such as drawing, sewing, 3D modelling and so on in my spare time. Crafting things inspires me, and it doesn’t matter if the outcome is physical or digital.					
                    </p>
                </section>
            </div>
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