import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const WcwlBadge=(props)=>{
    return(
        <>
            <PageTitle title="Chery International Co-Create Campaign" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <div id="section-work-body">
                        <div class="sectionList">
                            <h3>Type:</h3>
                            <p>Front-end development Internship project, August 2023</p>
                        </div>
                        <div class="sectionList">
                            <h3>Skills involved:</h3>
                            <p>HTML/CSS, Javascript</p>
                        </div>
                        <div class="sectionList">
                            <h3>Context:</h3>
                            <p>Part of the Jetour website maintenance project mentioned in the resume. Asked to develop demos for a new set of Jetour home page designs for client review. Developed the demo with a combination of Swiper.js plugin and CSS animation.
                            </p>
                        </div>
                        <div class="sectionList">
                            <h3>Gain:</h3>
                            <p>Gained experience in researching and developing complex visual styles with CSS animation.
                            </p>
                        </div>
                        <div class="sectionList demoHead">
                            <h3>Demo:</h3>
                            <img src="/img/gallery/pmpark-cheryInternational/wcwl/wcwlBadge-all.png"/>
                            <p class="demoComments">Desktop and mobile view</p>
                        </div>
                        <div class="sectionList">
                        <img src="/img/gallery/pmpark-cheryInternational/wcwl/demo_desktop.gif"/>
                            <p class="demoComments">Full Desktop View</p>
                        </div>
                        <div class="sectionList">
                            <img src="/img/gallery/pmpark-cheryInternational/wcwl/demo_mobile.gif"/>
                            <p class="demoComments">Switching between different languages while keeping the layout</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}