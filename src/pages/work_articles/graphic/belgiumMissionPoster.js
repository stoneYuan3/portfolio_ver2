import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const BelgiumMissionPoster=(props)=>{
    return(
        <>
            <PageTitle title="Charleroi Concert Poster Design" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Graphic Design"}
                        workSkill={"Photoshop, Figma, Midjourney"}
                        workContext={"Volunteer Project, Individual, 2023"}
                    />
                    
                    <div id="section-work-body">
                        <h2>Background</h2>
                        <p>
                        This is a poster design project done for a friend of mine from the Evangelical Chinese Bible Church (ECBC, <a href="https://ecbcchurch.wixsite.com/english">https://ecbcchurch.wixsite.com/english</a>) in Burnaby.

                        My friend was preparing a short-term mission with other Christians from the ECBC. Their goal was to spread the gospel to Chinese immigrants in Charleroi, Belgium, and they will host two music concerts there to aid their effort. I was already designing posters for my friend at the time, so he asked me to design a poster for those concerts.
                        </p>

                        <h2>Final Result</h2>
                        <div className="sectionList">
                            <img src="/img/gallery/belgiumMissionPoster/f2r.png"/>
                            <p className="demoComments">Final poster. The address of the concert changed due to accidents when my friend arrived in Belgium, and they had to reprint the poster there. I adjusted the poster to A4 before I sent it since it is more common in Europe. </p>
                            <img src="/img/gallery/belgiumMissionPoster/field1.jpeg"/>
                            <p className="demoComments">An example of my poster being used, photo taken by the team.</p>
                        </div>

                        <div className="sectionList">
                            <p><a href="https://www.figma.com/file/ECRUDrAbhRms3Id1vKcAOJ/poster-luke-112-09-26?type=design&node-id=0-1&mode=design&t=qUMsNTRUe63zALds-0">Original copy of the poster can be found here in Figma</a></p>
                            <p>The theme of the concert is “Value of life”, and I tried to convey this idea through the image of three people playing music on a large empty field. What are you going to do with your life? Listen to that music and you will know, hopefully.</p>
                        </div>
                        
                        <h2>Process/Challenge:</h2>
                        <div className="sectionList">
                            <p>One of the most significant experiences I had in this project was the feedback I received from my friend as well as other people in the mission team, which helped me to improve on details that I didn’t pay much attention to before. </p>
                        </div>

                        <div className="sectionList">
                            <img src="/img/gallery/belgiumMissionPoster/draft1.png"/>
                        </div>
                        <div className="sectionList">
                            <p>The image above is the first final draft that I sent to my friend as well as the mission team for feedback on the concept. The mission team liked the concept a lot, but they pointed out two issues with my poster that I didn’t realize:</p>
                            <p>
                                <ol>
                                    <li><strong>1.</strong>  The colour tone of the poster is somewhat depressing, which doesn’t fit the hopeful nature of the gospel. 
                                    </li>
                                    <li><strong>2.</strong>  The poster uses Traditional Chinese. It is a reasonable practice in Metro Vancouver but doesn’t fit well with the mission team’s target audience in Charleroi. The mission team suggested that their target audience is wok restaurant workers from mainland China and they likely can't read Traditional Chinese that well considering their education level.
                                    </li>
                                </ol>
                            </p>
                        </div>

                        <div className="sectionList">
                            <p>Fixing the second issue was easy but the first one requires some effort. I tried to adjust the colour saturation and brightness through Photoshop and generate some new images using Midjourney, but the best result was achieved by removing the original sky entirely using Photoshop and replacing it with a new sky image that has less cloud and higher saturation, also generated by Midjourney.</p>
                        </div>

                        <div className="sectionList">
                            <img src="/img/gallery/belgiumMissionPoster/process1.png"/>
                            <p className="demoComments">Other images I tried to generate with Midjourney, none seemed to be satisfying.</p>
                            <img src="/img/gallery/belgiumMissionPoster/process2-2.png"/>
                            <p className="demoComments">The steps I took to improve on the original one. Left: adjusting colour. Middle: adjusting colour and reducing cloud briefly. 3. Replace the sky with another image</p>
                        </div>

                        <div className="sectionList">
                            <p>Overall, this project was an interesting experience for me. Other than helping my friend and feeling excited that my work is being printed and used in real life, I also appreciate the fact that I get to use the Photoshop skills I learned before in real projects through the feedback I received.</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}