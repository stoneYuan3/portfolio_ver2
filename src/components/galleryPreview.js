
import { Link } from "react-router-dom";
import { scrollToTop } from '../components/navComponents';

export const WorkPreview = (props) => {
    return (
        <section className="flex flex-row section-galleryWork">
            <Link onClick={scrollToTop} to={props.link}><img src={props.image} alt="project preview image" /></Link>
            <div className="flex flex-column">
                <h2>{props.title}</h2>
                {/* <p id="work-type" className="p-type">{props.type}</p> */}
                {/* <p>{props.skill}</p> */}
                <p className="workIntro">{props.intro}</p>
                <p>{props.context}</p>
            </div>
        </section>  
    );
}

export const PlaygroundPreview = (props) => {
    return (
        <section className="flex flex-column section-playground">
            <Link onClick={scrollToTop} to={props.link}><img src={props.image} alt="project preview image" /></Link>
            <div className="flex flex-column">
                <h2>{props.title}</h2>
                {/* <p id="work-type" className="p-type">{props.type}</p> */}
                <p>{props.skill}</p>
                <p>{props.context}</p>
            </div>
        </section>  
    );
}