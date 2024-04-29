import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const JetourMap=(props)=>{
    return(
        <>
            <PageTitle title="JeTour Map Page Maintainence" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <div id="section-work-body">

                        <WorkIntro 
                            workType={"Front-end development"}
                            workSkill={"HTML/CSS, Javascript, Vue.js"}
                            workContext={"Front-end development Internship project"}
                            time={"July 2023"}
                        /> 

                        <div className="sectionList">
                            <p>Part of the Jetour website maintenance project mentioned in the resume. Asked to develop demos for a new set of Jetour home page designs for client review. Developed the demo with a combination of Swiper.js plugin and CSS animation.
                            </p>
                        </div>
                        <div className="sectionList">
                            <h2>Gain:</h2>
                            <p>Gained experience in researching and developing complex visual styles with CSS animation.
                            </p>
                        </div>
                        <div className="sectionList demoHead">
                            <h2>Demo:</h2>
                            <img src="/img/gallery/pmpark-jetour/mapMaintain/jetourMap1.gif"/>
                            <p className="demoComments">Vue.js powered search bar</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-jetour/mapMaintain/jetourMap2.gif"/>
                            <p className="demoComments">Mobile layout fix with Swiper.js powered options</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-jetour/mapMaintain/jetourMap3.gif"/>
                            <p className="demoComments">Switching between different languages while keeping the layout</p>
                        </div>
                        <div className="sectionList">
                            <h2>Process/Challenge:</h2>
                            <p>Learning how to implement Vue.js features on the go is perhaps the most challenging part of this project. Although I had some Vue.js online tutorials before, I had few chances to practice what I learned. To implement Vue.js features such as dynamic search bars, I conducted research and figured it out in a short time.
                            </p>
                            <p>Below are some notable resources I referenced for this project.</p>

                            <div className="refList">
                                <div>
                                    <h3>filter array</h3>
                                    <a href="https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects">https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects</a>
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a>
                                </div>
                                <div>
                                    <h3>Related Vue.js concept recap</h3>
                                    <a href="https://vuejs.org/guide/essentials/computed.html#basic-example">https://vuejs.org/guide/essentials/computed.html#basic-example</a>
                                    <a href="https://vuejs.org/guide/essentials/list.html#v-for-with-an-object">https://vuejs.org/guide/essentials/list.html#v-for-with-an-object</a>        
                                </div>
                                <div>
                                    <h3>Dynamic search bar refernece</h3>
                                    <a href="https://codepen.io/AndrewThian/pen/QdeOVa">https://codepen.io/AndrewThian/pen/QdeOVa</a>
                                </div>
                                <div>
                                    <h3>Find an object by the value of its key:</h3>
                                    <a href="https://stackoverflow.com/questions/60692263/select-object-in-javascript-with-keys-value-condition">https://stackoverflow.com/questions/60692263/select-object-in-javascript-with-keys-value-condition</a>
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</a>
                                </div>
                            
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    );
}