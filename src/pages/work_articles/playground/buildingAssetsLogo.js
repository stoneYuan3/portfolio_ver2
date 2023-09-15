import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const BuildingAssetsLogo =(props)=>{
    return(
        <>
            <PageTitle title="Building Assets Logo" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Graphic Design"}
                        workSkill={"Paint Tool SAI 2, Figma"}
                        workContext={"Volunteer Project, Individual, 2021"}
                    />
                    
                    <div id="section-work-body">
                        <p>
                        Back in 2021 I volunteered with a charity organization called Building Assets, an organization focusing on building education infrastructures in Myanmar. The organization was planning to have a new logo back then and I proposed some new logo ideas for them. 
                        </p>

                        <h2>List of sketches</h2>

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