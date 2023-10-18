import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";
import { WorkIntroNoBanner } from "../commonParts"

export const JetourDemo=(props)=>{
    return(
        <>
            <PageTitle title="Jetour Home Page Demo Development" />
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
                            <p>Part of the Jetour website maintenance project mentioned in the resume. Asked to fix the Vue.js and React.js powered map page of the original Jetour website. The original map page had issues with search bars and broken layout consistency in mobile and different language versions.
                            </p>
                            <p>Added a Vue.js powered search bar and fixed layout glitches in right-to-left language versions and mobile versions with the Swiper.js plugin. </p>
                        </div>
                        <div className="sectionList">
                            <h2>Gain:</h2>
                            <p>Practised my Vue.js skill by putting the knowledge I learnt in my own time before this project. Had an increased understanding towards compatibility issues across different languages.
                            </p>
                        </div>
                        <div className="sectionList demoHead">
                            <h2>Demo:</h2>
                            <iframe src="/img/source/jeTourDemo/index.html" title="description"></iframe>
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/banner.gif"/>
                            <p className="demoComments">Banner animation</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/allpage.gif"/>
                            <p className="demoComments">The rest of the page</p>
                        </div>
                        <div className="sectionList">
                            <h2>Process/Challenge:</h2>
                            <p>The most challenging part of this project is the banner slider transition animation. Each banner slide is separated by three circles of different sizes and is expected to rotate at different speeds when sliding to the next slide. Although I was familiar with relevant skills such as Swiper Slider plugin and CSS animation at the time, I had never dealt with such complex animations before.
                            </p>
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/process/144.gif"/>
                            <p className="demoComments">Expected outcome</p>
                        </div>
                        <div className="sectionList">
                            <p>After carefully analysing the structure of the animation in the demo, I decided to tackle the problem by setting up three independent HTML elements for the banner. Each HTML element represents one circle and they are animated separately.
                            </p>
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/process/jeTourDemo-process-1.png"/>
                        </div>
                        <div className="sectionList">
                            <p>
                            Realizing that just rotating the image is not enough to achieve the desired result, I decided to apply two layers of animation. While the rotation animation is realized with CSS animation, the fade effect in the video demo is realized with Swiper’s crossfade feature instead. This ensures that the image will rotate and fade at the same time during the transition just as the original demo video showcased.
                            </p>
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/process/jeTourDemo-process-2.png"/>
                            <p className="demoComments">Left: CSS animation. Right: Swiper transition animation</p>
                        </div>
                        <div className="sectionList">
                            <p>
                            The base for the banner animation is done at this moment, however, a new issue arises where the image can’t seem to cover the entire banner area when rotating.
                            </p>
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/process/197_raw.gif"/>
                            <p className="demoComments">Screen record for a quick report to my co-worker demonstrating the issue</p>
                            <p>
                            To solve this issue, I attempted to scale up the images during the transition, hoping this would be enough to cover the entire banner area. However, it appears that scaling the image a little is not sufficient while scaling the image too much will break the animation. To tackle the issue, I requested the design team to make the images square and applied a small scale up to images during transitions to achieve the desired result.
                            </p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}