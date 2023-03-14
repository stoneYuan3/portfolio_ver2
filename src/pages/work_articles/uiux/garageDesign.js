
import { WorkIntroNoLink } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const GarageDesign = () => {
    return (
        <>
            <PageTitle title="529 Garage Risk Map" />
            <BackToGallery link="/gallery/uiux" />

            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoLink
                        banner={"/img/banner-garageDesign.png"}
                        workType={'website design'}
                        workSkill={'User Interface | Web Design | Figma'}
                        workContext={'School Project, Individual, 2022'}
                    />

                    <div id="section-work-body">

                        <h2>Background</h2>

                    </div>

                </div>

            </div>

        </>
    );
}