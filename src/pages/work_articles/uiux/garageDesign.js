
import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const GarageDesign = () => {
    return (
        <>
            <PageTitle title="529 Garage Risk Map" />
            <BackToGallery link="/gallery/uiux" />

            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntro 
                        banner={"/img/banner-garageDesign.png"}
                        linkHref={"https://www.figma.com/file/s7niTjP3ENB3BknTrfAj1c/IAT334-A01-showcase?node-id=0%3A1&t=hUMBaSjQFjeTuRqh-0"}
                        linkIcon={"/img/base/link-figma.svg"}
                        linkTitle={"View in Figma"}
                        workType={'Website Design'}
                        workSkill={'User Interface | Web Design | Figma'}
                        workContext={'School Project, Individual, 2022'}
                    />
                    <div id="section-work-body">

                        <h2>Background</h2>
                        <p>This is a project from a user interface/user experience design course. Working individually, I am asked to design the layout of the homepage and user profile page for a fictional business. The project emphasises creating easy to use UI elements and clear hierarchies between different levels of UI elements.</p>
                        <p>I decided to design an artwork sharing platform that emphasises collaboration and interaction between content creators.</p>
                        

                        <figure>
                            <img src="/img/gallery/garageDesign/final.png"/>
                            <figcaption>The Final Result</figcaption>
                        </figure>

                        <figure>
                            <img src="/img/gallery/garageDesign/styleGuide.png"/>
                            <figcaption>Style guide</figcaption>
                        </figure>

                        <h2>Process</h2>
                        <p>I started by searching for existing artwork sharing platforms such as Artstation and Pixiv. While searching for those platforms, I noticed that those platforms don't provide much infrastructure for content creators to communicate with each other. They either don't have the feature at all or hide the feature under several layers of elements. As the result, I decided to use encouraging communication and collaboration between content creators as the key focus of my fictional artwork sharing platform.</p>
                        <div>
                            <figure className="flex section-image-2col-contain">
                                <div>
                                    <img src="/img/gallery/garageDesign/ref_artstation.png" />
                                </div>
                                <div>
                                    <img src="/img/gallery/garageDesign/ref_pixiv.png" />
                                </div>
                                <figcaption>Landing page of Artstation and Pixiv. Notice that group communication methods are nowhere to be found</figcaption>
                            </figure>    
                        </div>
                        <p>Such a finding encourages me to focus on providing better group communication and collaboration experiences for my fictional site. I started with making multiple rough greyscale drafts of the website layout, and then choose one set layout to refine from rough drafts.</p>
                        <figure>
                            <img src="/img/gallery/garageDesign/draft_initial.png"/>
                            <figcaption>Some initial drafts</figcaption>
                        </figure>
                        <figure>
                            <img src="/img/gallery/garageDesign/draft_refined.png"/>
                            <figcaption>Refined drafts</figcaption>
                        </figure>
                        <p>To make communication tools more accessible compared to existing platforms, I decided to put user's discussion groups and ongoing projects right on the homepage and user profile page. It aims to make those features more visible and therefore encourages users to use them more often. After deciding the final draft, I created the style guide and used it as a reference to create the final product.</p>

                        <h2>Reflection</h2>
                        <p>This project lifted my web design skill compared to previous web design projects that I had before, and I believe it is because I made more variation and brainstorming efforts compared to previous web design projects. After this project, I feel more encouraged to be more patient and do more variations before landing on the final design. </p>
                    </div>

                </div>

            </div>

        </>
    );
}