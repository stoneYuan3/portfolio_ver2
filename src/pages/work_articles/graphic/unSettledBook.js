import { WorkIntroNoBanner } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const UnSettled=(props)=>{
    return(
        <>
            <PageTitle title="Un/Settled Exhibition Booklet Design" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntroNoBanner 
                        workType={"Graphic Design"}
                        workSkill={"Indesign, Photoshop, Illustrator"}
                        workContext={"School Project, Individual, 2021"}
                    />
                    
                    <div id="section-work-body">
                        <h2>Background</h2>
                        <p>
                            This is the final project of PUB331 "Graphic Design in Transition: Print and Digital Books" from Simon Fraser University's publishing program. The project asks students to design an exhibition booklet for the art and poetry exhibition <a href="https://www.lib.sfu.ca/about/reach-us/news-events/unsettled-exhibit">“Un/Settled” by Otoniya J. Okot Bitek and Chantal Gibson</a>. The exhibition celebrates black women identity and took place at the Belzberg Library in SFU's Vancouver campus.

                        </p>

                        <h2>Final Result</h2>
                        <div class="sectionList">
                            <p>
                                <a href="https://drive.google.com/file/d/1fC4jEoHe7pCmv_W5wIQcFKU4yghCz4ED/view?usp=drive_link">View Original PDF document for back and front cover</a>
                            </p>
                            <p>
                                <a href="https://drive.google.com/file/d/13ooDtMnUZXHwc7rfxV2Pwm_sbfhEWGZg/view?usp=drive_link">View Original PDF document for inner pages (32 pages in total)</a>
                            </p>
                            <img src="/img/gallery/unSettled/p2.4-cover.png"/>
                            <p class="demoComments">Cover Design, left is back cover right is front cover</p>
                        </div>
                        <div class="sectionList">
                            <div className="flex section-image-2col">
                                <div>
                                    <img src="/img/gallery/unSettled/toc.png"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/unSettled/firstpg.png"/>
                                </div>
                            </div>
                            <p class="demoComments">Table of Content and first page</p>
                        </div>
                        <div class="sectionList">
                            <div className="flex section-image-2col autoHei">
                                <div>
                                    <img src="/img/gallery/unSettled/result1.jpg"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/unSettled/result2.png"/>
                                </div>
                            </div>
                            <p class="demoComments">Left: printed booklet. Right: printed booklet placed in the Belzberg Library (top-left corner) <a href="https://the-peak.ca/2022/01/un-settled-exhibit-prompts-students-to-create-thought-provoking-book-display-on-black-artistry-and-solidarity/">reported by The PEAK</a>, Simon Fraser University's student-run newspaper</p>
                        </div>

                        <h2>Process</h2>
                        <div class="sectionList">
                            <p><strong>Cover Design Process: Initial Research</strong></p>
                            <p>
                                Designing the cover for the Un/Settled Exhibition booklet was quite challenging because black women identity was not a familiar topic for me, and I had little idea about how to get started.
                            </p>
                            <p>
                                To tackle the challenge, I conducted research and attempted to draw inspiration from every relevant thing from random black women stock images to elements from the exhibition site. Several rough drafts and potentially useful visual elements were collected, which are shown below:
                            </p>
                            <img src="/img/gallery/unSettled/progress-cover-1.png"/>
                            <p class="demoComments">Stock photos from Unsplash, found during my initial Research</p>
                            <img src="/img/gallery/unSettled/progress-cover-0.png"/>
                            <p class="demoComments">Rough drafts for the cover design.</p>
                            <img src="/img/gallery/unSettled/progress-cover-2.png"/>
                            <p class="demoComments"><strong>Top-left:</strong> original photo from SFU library showing the exhibition site. <strong>Top-right, Bottom left, Bottom Right:</strong> graphic elements modified based on the original photo by myself. At that time I was trying to get inspiration from the exhibition site, and I was testing different alternatives.</p>
                            <img src="/img/gallery/unSettled/progress-cover-3.png"/>
                            <p class="demoComments">Portrait of Otoniya J. Okot Bitek (top image from Otoniya's website, bottom-left image (figure 19) from SFU publishing program's website) and Chantal Gibson (bottom-right, from SFU news). Using portraits of the authors for the cover was also one of my ideas</p>
                        </div>

                        <div class="sectionList">
                            <p><strong>Cover Design Process: First Draft 1st Variation</strong></p>
                            <p>
                                Based on my research, I created three refined drafts for the front and back cover of the book.
                            </p>
                            <p>
                                The first cover design attempted to convey a message of struggle, where the spread around, rough-looking hair, the high colour contrast along with the window frames created a strong tension, reflecting black woman’s struggle under the current system.
                            </p>
                            <img src="/img/gallery/unSettled/progress-cover-4.png"/>
                            <p class="demoComments">First cover design, front cover at right back cover at left.</p>
                        </div>
                        <div class="sectionList">
                            <p><strong>Cover Design Process: First Draft 2nd Variation</strong></p>
                            <p>
                                The second cover design used the window frame of the exhibition with the silhouette of a black woman. The outer window frames connect the cover to the exhibition site, and the inner frame with the standing black woman leaning on it reflects the idea of showcasing black womanhood passively.
                            </p>
                            <img src="/img/gallery/unSettled/progress-cover-5.png"/>
                            <p class="demoComments">Second cover design, front cover at right back cover at left.</p>
                        </div>
                        <div class="sectionList">
                            <p><strong>Cover Design Process: First Draft 3rd Variation</strong></p>
                            <p>
                                The third cover design used the portrait of Otoniya J. Okot Bitek, who is one of the authors of the exhibition. The photo was treated with Adobe Illustrator’s line tracing feature to make it look more abstract. By doing so I aim to show an abstract idea of black womanhood and reflect a sense of humanistic care to the victims of racial violence, which is what I found in Otoniya’s smile and the overall style of the exhibition.
                            </p>
                            <p>
                                I like the rationale of the third cover design the most because it fits the message of the exhibition the best, which is why I decided to build the final cover on the third draft.
                            </p>
                            <img src="/img/gallery/unSettled/progress-cover-6.png"/>
                            <p class="demoComments">Third cover design, back cover at right front cover at left.</p>
                        </div>

                        <div class="sectionList">
                            <p><strong>Booklet Content Process: Initial Research</strong></p>
                            <p>
                                Before designing contents for the booklet, I researched relevant web and print materials such as political movement websites, art gallery websites, student newspaper and so on for reference.
                            </p>

                            <img src="/img/gallery/unSettled/progress-inner-1.png"/>
                            <p class="demoComments">Reference images found during initial research.</p>
                        </div>

                        <div class="sectionList">
                            <p><strong>Booklet Content Process: Making decisions</strong></p>

                            <p>
                            Considering the examples I found above, the following design decisions are made:
                            </p>
                            <p>
                            <ol>
                                <li><strong>1.	Typeface</strong> <br/>
                                Since the exhibition is about black women identity and struggles for black people's rights, aggressive all-cap san-serif typeface, the uni sans and the Aileron Black is used for the titles and sub-titles. To reflect the elegance of poetry, a serif font (Liberation Serif) is used for body texts.
                                </li>
                                <li>
                                <strong>2.	Colour Composition</strong> <br/>
                                The colour composition of the book uses simple black and white to align with the colour composition of the actual exhibition. 
                                </li>
                                <li>
                                <strong>3.	Layout</strong> <br/>
                                The layout of the book uses single-column for the majority of the book and the book is in 9in wide 7in height photo book size. The extra white space given by such a layout and a photobook sized paper is a common reflection of art exhibition materials. 
                                </li>
                                <li>
                                <strong>4.	Images</strong> <br/>
                                The image used in the book includes the exterior views of the exhibition, the interior views of the exhibition and the construction progress of the exhibition, which gives a throughout view of the exhibition.
                                </li>
                                <li>
                                <strong>5.	Paper</strong> <br/>
                                A thick, non-glossary stock paper is used because the sharp edge and non-glossary surface somewhat aligns to the feeling I got from the real exhibition. 
                                </li>
                            </ol>
                            </p>                            
                            <div className="flex section-image-2col autoHei">
                                <div>
                                    <img src="/img/gallery/unSettled/progress-inner-2.png"/>
                                </div>
                                <div>
                                    <img src="/img/gallery/unSettled/progress-inner-3.png"/>
                                </div>
                            </div>
                            <p class="demoComments">Initial typeface experiments. I was deciding between a more aggressive, political-movement like design and a more graceful, poetry book design at the beginning. The final result was kind of a combination where I applied the aggressive design style to titles, and the graceful design style for the body text to reflect the idea of expressing political movements and struggles through poetry.</p>
                            <img src="/img/gallery/unSettled/progress-inner-4.png"/>
                            <p class="demoComments">Some more advanced layout draft and I was deciding which column structure I should use. For the final step, single column was chosen for the main contents, 2 column was chosen for reference page and 3 column was chosen for the table of contents.</p>
                        </div>


                    </div>

                </div>

            </div>

        </>
    );
}