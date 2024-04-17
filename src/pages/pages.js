import { WorkPreview, PlaygroundPreview } from "../components/galleryPreview";
import { NavGallery,NavGalleryWebdev,scrollToTop } from '../components/navComponents';
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
// export const Gallery = (props) => {
//     return(
//         <>
//             <PageTitle title="Gallery" />
//             <NavGallery page={props.page}/>
//             <GalleryContent content={props.content}/>
//             <Outlet />
//         </>
//     );
// }
export const Gallery = (props) => {
    return(
        <>
            <PageTitle title="Gallery" />
            <NavGallery navType={props.navType} page={props.page} backlink={props.backlink}/>
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
            {/* <PageTitle title="About Me" /> */}
            <div className="flex flex-column section-contentDisplay">
                <section className="flex flex-column section-about">
                    <div className="flex flex-row section-mybio">
                        {/* <img src="/img/about-portrait.png" /> */}
                        <div className="flex flex-column">
                            <h2>Shucong (Jack) Yuan</h2>
                            {/* <p><strong>Email: </strong>jack_yuan@sfu.ca (Preferred)</p> */}
                            <p><strong>Email: </strong>jackyuan110@gmail.com (Preferred)</p>
                            <p><strong>Telephone: </strong>778-223-9805</p>
                        </div>
                    </div>
                    <p className="charaTags">
                        Programmer, Designer, <a href="https://syuan-portfolio.netlify.app/webdev/playground/hanfuMaking">Talior</a>, Artist, <a href="https://www.flickr.com/photos/200092524@N07/">Photographer</a>, Gardener, Tea Drinker, <a href="https://store.steampowered.com/app/359320/Elite_Dangerous/" className="slash">Elite: Dangerous Commander</a>... and More.
                    </p>
                    <p>
                        Studies at Simon Fraser University, School of Interactive Arts and Technology (Bachelor of Art)				
                    </p>
                    <p>
                        Focuses on web development but enjoys all kinds of crafting and creative activities, no matter digital or physical.  			
                    </p>
                    <p>
                        Currently volunteering as the front-end developer of the <a href="https://biblepoetry.org/">Sela Project team</a>, the photographer of <a href="https://www.vancouverhanfu.com/en">Vancouver Hanfu Culture Association</a> and the graphic designer of <a href="https://vanartistfellowship.wordpress.com/">Vancouver Christian Arts Fellowship</a>.			
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