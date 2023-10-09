import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";
import { WorkIntroNoBanner } from "../commonParts"

export const WcwlBadge=(props)=>{
    return(
        <>
            <PageTitle title="Chery International Co-Create Campaign" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <div id="section-work-body">
                        <WorkIntroNoBanner 
                            workType={"Front-end development"}
                            workSkill={"HTML/CSS, Javascript"}
                            workContext={"Front-end development Internship project, August 2023"}
                        />

                        <div className="sectionList">
                            <p>Part of the Jetour website maintenance project mentioned in the resume. Asked to develop demos for a new set of Jetour home page designs for client review. Developed the demo with a combination of Swiper.js plugin and CSS animation.
                            </p>
                        </div>
                        <div className="sectionList">
                            <h3>Gain:</h3>
                            <p>Gained experience in researching and developing complex visual styles with CSS animation.
                            </p>
                        </div>
                        <div className="sectionList demoHead">
                            <h3>Demo:</h3>
                            <img src="/img/gallery/pmpark-cheryInternational/wcwl/wcwlBadge-all.png"/>
                            <p className="demoComments">Desktop and mobile view</p>
                        </div>
                        <div className="sectionList">
                        <img src="/img/gallery/pmpark-cheryInternational/wcwl/demo_desktop.gif"/>
                            <p className="demoComments">Full Desktop View</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-cheryInternational/wcwl/demo_mobile.gif"/>
                            <p className="demoComments">Switching between different languages while keeping the layout</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}