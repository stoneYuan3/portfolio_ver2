import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const IsaBanner=(props)=>{
    return(
        <>
            <PageTitle title="Research Institute Website Banners" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Graphic Design"}
                        workSkill={"Photoshop"}
                        workContext={"Internship Project, Individual, 2022"}
                    />
                    
                    <div id="section-work-body">
                        <p>
                            This project was done during a graphic design internship with Simon Fraser University's Institutional Strategic Awards (ISA). For this project, my task was to design a series of website banners for ISA's website.

                        </p>
                        <p>
                            To complete the task, I searched through potentially useful images from online resources and ISA's image stock and put them together in a way that reflects the topic of the webpage with Adobe Photoshop.
                        </p>

                        <h2>List of Banners</h2>

                        <div class="flex flex-column section-work-gallery">
                            <div>
                                <img src="/img/gallery/isaBanner/ApplyingForFunding.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/ContractsAndAgreements.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/Ethics-AnimalResearch.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/Ethics-HumanResearch.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/FundingOpportunities.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/InventionsAndCommercialization.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/ManagingFundingAndProjects.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/PrecursorsToResearch.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/PrizesAndAwards.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/ResearchSafety.png"/>
                            </div>
                            <div>
                                <img src="/img/gallery/isaBanner/TrainingAndEvents.png"/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}