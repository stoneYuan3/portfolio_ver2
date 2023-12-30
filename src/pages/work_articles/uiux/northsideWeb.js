import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const NorthsideWeb=(props)=>{
    return(
        <>
            <PageTitle title="Northside Foursquare Church Website Re-design" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"UI/UX Design"}
                        workSkill={"Figma, Typeform"}
                        workContext={"School Project, Group, 2023"}
                    />
                    
                    <div id="section-work-body">
                        <h2>Background</h2>
                        <p>
                            This is the final project of IAT432 "Design Evaluation" from Simon Fraser University's School of Interactive Arts and Technology. The project is about reaching out to a real client and re-designing one aspect of their digital products (such as their website) based on the client's needs. The client we choose is the <a href="https://northsidechurch.ca/">Northside Foursquare Church</a> and we are re-designing their volunteer sign-up process based on Northside's tech lead's request. 
                        </p>
                        <p>
                            After conducting a combination of heuristic evaluation, user interviews, user testing and data analysis based on the knowledge we learned in lectures, we completed a Figma prototype and a report illustrating our process and conclusions.
                        </p>
                        <p>This project is done in a group of 4 and my role includes drafting out our plans, conducting user interviews, preparing pre-test and post-test questionnaires, and preparing the prototype.</p>

                        <h2>Final Result</h2>
                        <div className="sectionList">
                            <p>
                                <a href="https://www.figma.com/proto/B1d7KWWwFYXFzblI7PGTVU/IAT-432---Assignment-4---Fall-2023?type=design&node-id=213-3&t=SbCJM4Il0r9OJaRC-0&scaling=scale-down-width&page-id=86%3A213&starting-point-node-id=213%3A3">Figma Prototype Link</a>
                            </p>
                            <p>
                                <a href="https://drive.google.com/file/d/1_5pG6IzktFkWCdBTmbqqzzuUn6BeU8Fx/view">Final Report (17 pages in total)</a>
                            </p>
                            <img src="/img/gallery/northsideWeb/figmaPrototype.png"/>
                            <p className="demoComments">Screenshot of our prototype</p>
                            <img src="/img/gallery/northsideWeb/figmaPrototype-compare.png"/>
                            <p className="demoComments">Comparison between the original version and our new design</p>
                        </div>

                        <h2>Process</h2>
                        <div className="sectionList">
                            <p>
                                We had a three-step process for this project: 
                            </p>
                            <p><strong>Initial Investigation: </strong>Our team analysed the current volunteer sign-up process using the <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">“10 Usability Heuristics for User Interface Design”</a> By Nielsen Norman Group , and prepared some <a href="https://docs.google.com/document/d/1Ha4Nwy5drSM_-uZEbVCU8gcnQMDc9lAz/edit">initial questions</a> to find out why people decide to volunteer and what they value.</p>
                             
                            <p><strong>Prototyping: </strong>We studied the feedback we got from the initial investigation step and made a prototype in Figma based on our Findings.</p>

                            <p><strong>Testing: </strong>We recruited some test participants to use both the original volunteer sign-up page and our prototype. We measured the time it took participants to sign up, counted the positive, neutral and negative comments that participants made when recapping their sign up process, and let them answer some <a href="https://docs.google.com/document/d/1lr8Im8MlhoMmNrqwNzQlIUWQ5kkoHC-0/edit">post-test questions</a> after the test. We aim to compare two designs and find out which one is more efficient, which one is more preferred by users, and why.</p>
                        </div>

                        <div className="sectionList">
                            {/* <h3>Initial Investigation</h3> */}
                            <p><strong>Initial Investigation</strong></p>
                            <p>We managed to recruit 13 interviewees for the pre-test questions. Two key insights are listed below:</p>
                            <p>
                                <ol>
                                    <li><strong>1. </strong>
                                    People who have previous volunteer experience or strong involvement in communities tend to sign up in person without using any online platform (9 of 11 answers). People who are not deeply involved in communities or don't have any previous volunteer experience are more inclined to use online sign-up methods (3 of 11 answers).
                                    </li>
                                    <li>
                                    <strong>2. </strong>
                                    Users consider background information about the organization (leadership, value, goals, etc)(6 of 12 answers), information on the specific task (6 of 12 answers), pre-requests for the position (3 of 12 answers) and schedule-related information (when should I start, how often am I expected to come and so on) (4 of 12 answers) to be the most helpful information for them to decide whether they should volunteer.
                                    </li>
                                </ol>
                            </p>
                        </div>
                        
                        <div className="sectionList">
                            <p><strong>Prototype</strong></p>
                            <p>Our prototype include those major changes:</p>
                            <p><strong>Revised volunteer sign-up page structure</strong></p>
                            <img src="/img/gallery/northsideWeb/prototypeImp.png" />
                            <p>
                                We added the portrait of the leader who is leading the ministry, an Ask Questions button that sends emails to the leader, pre-request and schedule info on the volunteer page. We believe it is more efficient to notify users before they enter the form, and we also believe that the leader portraits make the process more welcoming to newcomers.
                            </p>
                            <p>
                                We also slightly expanded the descriptions below “Become a Volunteer” to disclose more useful information at an earlier stage.
                            </p>
                            <p><strong>Uniform style for Typeform forms</strong></p>
                            <img src="/img/gallery/northsideWeb/protoTypeform.png" />
                            <p className="demoComments">Comparsion between the original typeforms and our new design</p>
                            <p>
                                The Northside Church is using Typeforms to collect sign up information from users and We made some new Typeforms by ourselves to make the sign up form more consistent across different ministries. The structure we are using for all Typeforms is shown below:
                            </p>
                            <img src="/img/gallery/northsideWeb/protoTypeformStructure.png" />
                        </div>

                        <div class="sectionList">
                            <p><strong>Testing Results:</strong></p>
                            <p>We mananged to recruit 8 test participants for the comparative test between the new prototype and the original website. We noticed that:</p>
                            <p>
                                <ol>
                                    <li>
                                        <strong>1. </strong>
                                        The prototype isn’t really making the process more “efficient” since the time it took users to sign up is roughly the same
                                    </li>
                                    <li>
                                        <strong>2. </strong>
                                        The prototype is more preferrable where when recapping their sign-up process, users made much more positive comments and much less negative comments when they are commenting on their experience with the prototype.
                                    </li>
                                </ol>
                            </p>
                            <p>On top of that, reasons why users preferr the prototype include:</p>
                            <p>
                                <ol>
                                    <li>
                                        <strong>1. </strong>
                                        Important information is more accessible in the prototype                                    
                                    </li>
                                    <li>
                                        <strong>2. </strong>
                                        Visual style for Typeform sign up forms is more consistent in the prototype                                   
                                    </li>
                                    <li>
                                        <strong>3. </strong>
                                        Images of leaders who are in charge of the position are helpful as they give participants a better sense of the position, letting participants be more informed about the organization which gives them a good start if they want to ask those leaders in person or through email.                                    
                                    </li>
                                    <li>
                                        <strong>4. </strong>
                                        Filling out contact info is more efficient in the new prototype’s Typeform as it puts all contact info input boxes (name, phone number, email, etc) on the same step instead of separating them in different steps.                             
                                    </li>
                                    <li>
                                        <strong>5. </strong>
                                        Task scope is more understandable in the prototype.  
                                    </li>
                                </ol>
                            </p>
                        </div>

                        <div className="sectionList">
                            <p><strong>Conclusions</strong></p>
                            <p>This project was somewhat challenging because I need to communicate with my group members, the client and the test participants, and we had very limited time due to a 3-4 weeks teaching staff strike in that semester. Despite those challenges, I still find this project interesting where I find the idea of using user inputs to drive the development fascinating. 
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}