import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const EcbcExhibition =(props)=>{
    return(
        <>
            <PageTitle title="Christian Art Exhibition: Resurrection" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Drawing"}
                        workSkill={"Photoshop"}
                        workContext={"Recreational Project, individual, 2022"}
                    />
                    
                    <div id="section-work-body">
                        <p>
                        Invited to help out by my church friends in the Christian art exhibition "Resurrection" located in the Burnaby Evangelical Chinese Bible Church (ECBC), in May 2022. Helped to set up the main installation art and also contributed two of my drawings to the exhibition.
                        </p>

                        <h2>List of sketches</h2>

                        <div className="flex flex-column section-work-gallery">
                            <div className="flex section-image-2col">
                                <div>
                                    <img src="/img/playground/resurrectionExhibition/poster1.jpg" />
                                </div>
                                <div>
                                    <img src="/img/playground/resurrectionExhibition/poster2.jpg" />
                                </div>
                                <p className="demoComments">Posters of the exhibition for reference. I didn't design the posters</p>
                            </div>
                            {/* <p className="demoComments">Posters of the exhibition for reference. I didn't design the posters</p> */}
                            <p class="p-work-imageCap"><em>Posters of the exhibition for reference. I didn't design the posters</em></p>
                            
                            <div class="sectionList">
                                <img src="/img/playground/resurrectionExhibition/prep.jpg" />
                                <p className="demoComments">Building the main art installation</p>
                            </div>
                            {/* <p className="demoComments">Building the main art installation</p> */}
                            {/* <p class="p-work-imageCap"><em>Building the main art installation</em></p> */}

                            <div class="sectionList">
                                <img src="/img/playground/resurrectionExhibition/work1.jpg" />
                                <p className="demoComments">My drawings, framed and delivered to the exhibition site</p>
                            </div>
                            {/* <p className="demoComments">My drawings, framed and delivered to the exhibition site</p> */}
                            {/* <p class="p-work-imageCap"><em>My drawings, framed and delivered to the exhibition site</em></p> */}

                            <div className="flex section-image-2col sectionList">
                                <div>
                                    <img src="/img/playground/resurrectionExhibition/exhibit1.jpg" />
                                </div>
                                <div>
                                    <img src="/img/playground/resurrectionExhibition/exhibit2.jpg" />
                                </div>
                                <p className="demoComments">Exhibition day</p>
                            </div>
                            {/* <p className="demoComments">Exhibition day</p> */}
                            {/* <p class="p-work-imageCap"><em>Exhibition day</em></p> */}

                            <div class="sectionList">
                                <img src="/img/playground/resurrectionExhibition/work2.jpg" />
                                <img src="/img/playground/resurrectionExhibition/work3.jpg" />
                                <p className="demoComments">My drawings during the exhibition</p>
                            </div>
                            {/* <p className="demoComments">My drawings during the exhibition</p> */}
                            {/* <p class="p-work-imageCap"><em>My drawings during the exhibition</em></p> */}

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}