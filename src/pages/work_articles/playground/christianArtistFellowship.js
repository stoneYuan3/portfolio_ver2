import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const ChristianArtistFellowship =(props)=>{
    return(
        <>
            <PageTitle title="Christian Artist Fellowship Website Design & Development" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Web Design and Wordpress Web Development"}
                        workSkill={"Wordpress, Figma"}
                        workContext={"Volunteer Project, Group, 2023, Ongoing"}
                    />
                    
                    <div id="section-work-body">
                        <p>
                            I have some friends who are in the Christian Art Fellowship (sometimes referred as Vancouver Artist Fellowship), a non-government organization for Chinese Christian artists to discuss art and faith and worship God with their art talents. The Christian Art Fellowship is planning to have a website, and I offered to help. 
                        </p>
                        <p>
                            After some conversations with the fellowship, we agreed to use Wordpress to build the website because they are planning to maintain the website (ex. post new contents) on their own, which would be challenging if I build the website for them from scratch.
                        </p>

                        <h2>Progress</h2>

                        <div className="flex flex-column section-work-gallery">
                            <div class="sectionList">
                                <img src="/img/playground/buildingAssets/logo_sketches_1.png"/>
                            </div>
                            <p class="p-work-imageCap"><em>Rough sketches</em></p>
                            <div>
                                <img src="/img/playground/buildingAssets/logo_sketches_2.png"/>
                            </div>
                            <p class="p-work-imageCap"><em>Final sketches</em></p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}