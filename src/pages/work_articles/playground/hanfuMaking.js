import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const HanfuMaking =(props)=>{
    return(
        <>
            <PageTitle title="Garment Making Projects" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                   <WorkIntro 
                        workType={"Garment Design / Making"}
                        workSkill={"Sewing, Pattern Making, Adobe Illustrator"}
                        workContext={"Hobby Project"}
                        time={"2022 - present"}
                    />                        
                    
                    <div id="section-work-body">
                        <p>
                            Garment designing and making is one of my proudest hobbies starting around September 2022. Inspired by the <a href="https://en.wikipedia.org/wiki/Hanfu_Movement">Hanfu Revival Movement</a> in China, I decided to develop a sewing hobby so I could explore ways of integrating traditional wearing such as Hanfu into modern life myself.
                        </p>
                        <div className="sectionList">
                            <img src="/img/playground/hanfuMaking/overall.png"/>
                            <p className="demoComments">Some examples of finished products</p>
                        </div>

                        <h2>Process/Challenge</h2>
                        <div className="sectionList">
                            <p>
                                The most notable challenge I found in the cycle of making a garment so far is pattern making. Although there are many patterns available on the internet, they are mostly for conventional clothes and it is hard to find a finished, ready-for-print pattern for the kind of garment I would like to make. The closest thing I can find is line drafts with dimensions labelled from <a href="https://www.newhanfu.com/guide-turorial/making">newhanfu.com's tutorials</a>, and I have to prepare those line drafts for print.
                            </p>
                            <p>
                                I decided to use Adobe Illustrator to solve this issue as Adobe Illustrator’s rich vector graphic functionalities allow me to prepare digital patterns accurately, plus I was already familiar with Adobe Illustrator at that time. After some experiments, My normal workflow for this approach trace the draft inside Adobe Illustrator, scale it to the correct size, and divide it into several letter-sized pieces using Adobe Illustrator’s name feature. After that, I would export those pieces as PDFs, combine them into one single PDF document and print them out.
                            </p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/playground/hanfuMaking/traceScale.png"/>
                            <p className="demoComments">Tracing and scaling the pattern</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/playground/hanfuMaking/shapeBuilder.png"/>
                            <p className="demoComments">Treating the pattern using Adobe Illustrator's shape builder</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/playground/hanfuMaking/treatPrint.png"/>
                            <p className="demoComments">Treated digital pattern and printed pattern</p>
                        </div>
                        <div className="sectionList">
                            <p>
                                This process also allowed me to change the pattern design easily. Since I recreated the pattern in vector graphics, modifying the pattern wouldn’t be hard with Adobe Illustrator’s rich support for vector graphic content.
                            </p>
                            <img src="/img/playground/hanfuMaking/modify.png"/>
                            <p className="demoComments">
                                Left: original pattern from <a href="https://www.newhanfu.com/17193.html">here</a>, a full body length cloak. Right: modified pattern, changed to half body length and modified the sleeve</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}