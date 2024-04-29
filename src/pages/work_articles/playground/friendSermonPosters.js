import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const FriendSermonPosters =(props)=>{
    return(
        <>
            <PageTitle title="Sermon Posters for a Friend" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    
                    <WorkIntro 
                        workType={"Graphic Design"}
                        workSkill={"Photoshop, Illustrator, Figma, MidJourney"}
                        workContext={"Volunteer Project, Individual"}
                        time={"2021"}
                    />    

                    <div id="section-work-body">
                        <p>
                            One of my friends in church asked me to do him a favour. My friend occasionally has special presenters in his church who need a poster to promote the presentation (or sermon) in WeChat group chats, and he usually asks for my help.
                        </p>
                        <p>
                            In terms of design I am not very proud of those posters as in most cases my friend had the idea in mind already and he is quite insistent about it. However, other than doing my friend a favour, this project allowed me to discover some new approaches such as using Midjourney in design. Some visual elements are created with Midjourney in those posters and it was rather an interesting experience.
                        </p>

                        <h2>List of Posters</h2>

                        <div className="flex flex-column section-work-gallery">
                            <div class="sectionList">
                                <img src="/img/playground/lukePosters/p1.png"/>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/lukePosters/p2.png"/>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/lukePosters/p3.png"/>
                            </div>
                            <div class="sectionList">
                                <img src="/img/playground/lukePosters/p4.png"/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}