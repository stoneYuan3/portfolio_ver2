import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const EDImodule=(props)=>{
    return(
        <>
            <PageTitle title="Equity-Diversity-Inclusion Training Module Re-design" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Graphic Design"}
                        workSkill={"Articulate Storyline 360, Illustrator"}
                        workContext={"Internship Project, Individual, 2022"}
                    />
                    
                    <div id="section-work-body">
                        <h2>Background</h2>
                        <p>
                        This is an internship project done during a graphic design internship with Simon Fraser University's Institutional Strategic Awards (ISA). For this project, I was asked to redesign ISA’s internal Equity-Diversity-Inclusion training module. The EDI module was started by another internship student last term, but they didn’t finish it.
                        </p>

                        <p>
                        To finish and improve the training module, I added original vector graphics with Adobe Illustrator to better explain the concept and reorganized the structure of the slides for a better experience with Articulate Storyline 360.
                        </p>

                        <h2>Final Result</h2>
                        <div className="sectionList">
                            <p>The original EDI training module includes eleven modules and around 70-90 slides in total. Below are some selected slides that demonstrates my efforts.</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/EDImodule/intro1-1.jpg"/>
                            <img src="/img/gallery/EDImodule/intro2-1.jpg"/>
                            <img src="/img/gallery/EDImodule/intro2-2.jpg"/>
                            <img src="/img/gallery/EDImodule/sr-3-1.jpg"/>
                        </div>
                        {/* <div className="sectionList">
                            <p><a href="">View the exported PDF version of the entire EDI module here.</a></p>
                        </div> */}

                        <h2>Process/Challenge:</h2>
                        <div className="sectionList">
                            <p>The most memorable part of this project is the feedback I get for some details on my vector graphics.</p>
                            <p>
                            One example of this is the feedback I got for a vector graphic that uses a person wearing a tie to represent common job applicants. After submitting it to my co-worker for review, I received feedback that the tie could be interpreted as a male symbol and is potentially excluding female applicants, which would be ironic for a training module on Equity.
                            </p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/EDImodule/process-1.png"/>
                            <p className="demoComments">An early draft showing my original plan</p>
                        </div>
                        <div className="sectionList">
                            <p>Originally interpreting tie as a neutral sign for the job market, I realized that I didn’t notice the culture and paradigms that a tie is representing and ended up creating something controversial for the context. After thanking my co-worker for the advice, I changed the tie to a button-shirt, which is considered more gender-neutral. </p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/EDImodule/intro3-1.jpg"/>
                            <p className="demoComments">Final version</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}