import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const CmcSermon=(props)=>{
    return(
        <>
            <PageTitle title="Church Sunday Sermon Posters" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">

                    <WorkIntro 
                        workType={"Graphic Design"}
                        workSkill={"Photoshop, Illustrator, Tablet Drawing"}
                        workContext={"Volunteer Project, Individual"}
                        time={"2021"}
                    /> 
                    <div id="section-work-body">
                        <p>
                            This is a long-term volunteer project with the Coquitlam Mandarin Church, which lasted for three months. My task was to design Sunday sermon posters each week.

                        </p>
                        <p>
                            The most common approach I took is to draw the major parts with my tablet and vectorise the drawing with Illustrator to improve its visual quality. Sometimes, when it is more appropriate to use images, I also use Photoshop and Illustrator to process those images to fit the poster. All texts are added with Illustrator.
                        </p>

                        <h2>List of Posters</h2>

                            <div className="flex flex-column section-work-gallery">
                                <div>
                                    <img src="/img/gallery/cmcSermon/1.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/2.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/3.png"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/4.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/5.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/6.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/7.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/8.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/9.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/cmcSermon/10.jpg"/>
                                </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}