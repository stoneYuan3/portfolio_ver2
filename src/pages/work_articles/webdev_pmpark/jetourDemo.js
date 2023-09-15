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

                        <div class="sectionList">
                            <p>Part of the Jetour website maintenance project mentioned in the resume. Asked to fix the Vue.js and React.js powered map page of the original Jetour website. The original map page had issues with search bars and broken layout consistency in mobile and different language versions.
                            </p>
                            <p>Added a Vue.js powered search bar and fixed layout glitches in right-to-left language versions and mobile versions with the Swiper.js plugin. </p>
                        </div>
                        <div class="sectionList">
                            <h3>Gain:</h3>
                            <p>Practised my Vue.js skill by putting the knowledge I learnt in my own time before this project. Had an increased understanding towards compatibility issues across different languages.
                            </p>
                        </div>
                        <div class="sectionList demoHead">
                            <h3>Demo:</h3>
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/banner.gif"/>
                            <p class="demoComments">Banner animation</p>
                        </div>
                        <div class="sectionList">
                            <img src="/img/gallery/pmpark-jetour/jeTourDemo/allpage.gif"/>
                            <p class="demoComments">The rest of the page</p>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}