import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const ChristianArtistFellowship =(props)=>{
    return(
        <>
            <PageTitle title="Christian Artist Fellowship Website Design & Development" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">

                    <WorkIntro 
                        workType={"Web Design and Wordpress Web Development"}
                        workSkill={"Wordpress, Figma"}
                        workContext={"Volunteer Project, Group"}
                        time={"2023 - present"}
                        link={
                            <div className="sectionList workIntroLinks">
                                <a className="link" href="https://vanartistfellowship.wordpress.com/">
                                    <img src="/img/base/link-webGeneral.svg" />Website Link (Work in Progress)
                                </a>
                            </div>
                        }
                    />                    
                      
                    <div id="section-work-body">
                        <p>
                            I have some friends who are in the Christian Art Fellowship (sometimes referred to as the Vancouver Artist Fellowship), a non-government organization for Chinese Christian artists to discuss art and faith and worship God with their art talents. The Christian Art Fellowship is planning to have a website, and I offered to help.
                        </p>
                        <p>
                            After some conversations with the fellowship, we agreed to use WordPress to build the website because they are planning to maintain the website (ex. post new content) on their own, which would be challenging if I build the website for them from scratch.
                        </p>

                        <h2>Progress</h2>

                        <div className="flex flex-column section-work-gallery">
                            <div class="sectionList">
                                <p>I started by researching websites that have similar purposes. As the Christian Art Fellowship combines both art and Christian faith, I looked for several church websites as well as gallery websites for reference.</p>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/christianArtistFellowship/web1.png"/>
                                <p className="demoComments">Screenshot of those reference websites, which I also shown to the Christian Art Fellowship</p>
                            </div>
                            {/* <p class="p-work-imageCap"><em>Screenshot of those reference websites, which I also shown to the Christian Art Fellowship</em></p> */}
                            <div class="sectionList">
                                <p>Based on those reference sites, I concluded five main components that sites of this kind generally have: A home page, a page that introduces the organization, a page that records all activities & new activity forecast, and a page that includes regularly arranged lessons, and a page with ways of getting involved & support the organization. This is necessary as my clients in the Christian Art Fellowship have little experience with websites.</p>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/christianArtistFellowship/web2.png"/>
                            </div>
                            <div class="sectionList">
                                <p>After briefing my findings to the Christian Art Fellowship and getting an idea of what they need, I arranged the Christian Art Fellowship website structure in a diagram:</p>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/christianArtistFellowship/web3.png"/>
                            </div>
                            <div class="sectionList">
                                <p>Other than universal sections such as activity, get involved and so on, I also added a page describing different fellowship groups under the Christian Art Fellowship and a section that includes a statement about the Christian Art Fellowship's beliefs based on their needs.</p>
                            </div>
                            <div class="sectionList">
                                <p>I started development with WordPress after the Christian Art Fellowship approved the website structure that I suggested. The basic web structure is done now and the current home page design is shown below. The pace for this project is slow as both me and the Christian Art Fellowship are running the project part-time. At the moment I am waiting for more real content from the Christian Art Fellowship and I am planning to conduct some usability tests after that.</p>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/christianArtistFellowship/web-all.png"/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}