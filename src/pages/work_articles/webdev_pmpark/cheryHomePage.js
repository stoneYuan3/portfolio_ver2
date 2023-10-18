import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";
import { WorkIntroNoBanner } from "../commonParts"

export const CheryHomePage=(props)=>{
    return(
        <>
            <PageTitle title="Chery International Home Page Development" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <div id="section-work-body">
                        <WorkIntroNoBanner 
                            workType={"Front-end development"}
                            workSkill={"HTML, CSS, Javascript"}
                            workContext={"Front-end development Internship project, May 2023"}
                        />

                        <div className="sectionList">
                            <p>This project is a practice project my supervisor gave me when I just got into the position. The task is to develop the homepage of Chery International based on design documents provided by designers. Extensive research and tests were applied in this project. Although this project serves no real purpose, it introduced me to industry standards and common technologies used by the corporation and tested my trouble-shooting skills in web development.
                            </p>
                        </div>
                        <div className="sectionList">
                            <h2>Gain:</h2>
                            <p>Gained hands-on experience in various web development skills such as Swiper Slider plugin and CSS animation. Practiced my trouble-shooting skill and gained confidence in my self-learning ability.
                            </p>
                        </div>
                        <div className="sectionList demoHead">
                            <h2>Demo:</h2>
                            <iframe src="/img/source/cheryInternational/index.html" title="description"></iframe>
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/all.png"/>
                            <p className="demoComments">PC and Mobile</p>
                        </div>
                        <div className="sectionList demoHead">
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/overview.gif"/>
                            <p className="demoComments">Site overview</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/numberAnim.gif"/>
                            <p className="demoComments">Number animation</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/factoryVisit.gif"/>
                            <p className="demoComments">Factory visit animation</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/testDrive.gif"/>
                            <p className="demoComments">Test drive slider (note. images are rough placeholders)</p>
                        </div>
                        <div className="sectionList">
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/mobile.gif"/>
                            <p className="demoComments">Mobile overview</p>
                        </div>

                        <div className="sectionList">
                            <h2>Process/Challenge:</h2>
                            <p>I encountered four main challenges in this project.
                            </p>
                        </div>
                        <div className="sectionList">
                            <h3>Bridging with company standards</h3>
                            <p>Other than coding style standards, the company also has a variety of self-developed plugins that are used to maintain layout consistency and quality. Because I wasn’t aware of those plugins, it was very challenging to get my work aligned with their standards at first. After communicating with my supervisor and studying examples from previous projects, I integrated those plugins into my work and quickly adapted to those new standards.
                            </p>
                        </div>

                        <div className="sectionList">
                            <h3>Learning Swiper Plugin</h3>
                            <p>The Chery International homepage design provided by designers has several slider features involved. Swiper.js plugin is commonly used to realize slider features according to my supervisor, however I didn’t have any experience with this plugin as I never find the use of slider necessary in my school or personal projects. After viewing the official documentation of Swiper.js, I was able to build basic Swiper slides in a short time.
                            </p>
                            <div className="refList">
                                <div>
                                    <a href="https://swiperjs.com/swiper-api ">https://swiperjs.com/swiper-api </a>
                                    <a href="https://swiperjs.com/demos ">https://swiperjs.com/demos </a>
                                </div>   
                            </div>
                        </div>

                        <div className="sectionList">
                            <h3>Animations and effects that cannot be achieved with Swiper</h3>
                            <p>Although it didn’t take much time for me to master fundamental Swiper functionalities, I encountered significant challenges with dealing with effects that aren’t supported by the Swiper plugin, such as the “2023 Shanghai Autoshow” slider transition and the Factory Visit section animation.
                            </p>
                        </div>
                        <div className="sectionList">
                            <h4>Factory Visit Animation</h4>
                            <p>The Factory Visit Animation requires those image columns at the right to move consistently, and when the user hovers over one of the images the affected image column should pause and the hovered image should expand.
                            </p>
                            <p>I tried to build this feature with Swiper.js, however there are significant glitches when the user hovers over the image. After asking my co-workers and conducting some research, I realized that the Swiper plugin may not be ideal for this feature. I was introduced to CSS powered animations during my research and I decided to apply this new technology instead.
                            </p>
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/codepen-factoryVisit.png"/>
                            <p className="demoComments">The Codepen demo I referenced after filtering out many unuseful demos and examples <br/><a href="https://codepen.io/t_afif/pen/MWGJXEV">https://codepen.io/t_afif/pen/MWGJXEV</a></p>

                            <img src="/img/gallery/pmpark-cheryInternational/homepage/factoryVisit-prototype.gif"/>
                            <p className="demoComments">The prototype I built to test this new technology</p>
                        </div>
                        <div className="sectionList">
                            <h4>“Shanghai Autoshow” Number Animation</h4>
                            <p>The numbers on the “Shanghai Autoshow” slide are expected to animate like a slotting machine during slide transition and it is clear that there is no way to achieve this under the Swiper.js plugin. I decided to approach this challenge with the new CSS animation approach that I just used for Factory Visit. It took me some time to find the right resources, but I eventually figured it out. 
                            </p>
                            <p>I tried to build this feature with Swiper.js, however there are significant glitches when the user hovers over the image. After asking my co-workers and conducting some research, I realized that the Swiper plugin may not be ideal for this feature. I was introduced to CSS powered animations during my research and I decided to apply this new technology instead. After studying and testing the demos and videos I found online, I successfully achieved the desired result and gained a deeper understanding towards CSS animation.
                            </p>
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/codepen-numberAnim.png"/>
                            <p className="demoComments">The most useful Codepen demo I referenced for this issue<br/><a href="https://codepen.io/kh-mamun/pen/NdwZdW">https://codepen.io/kh-mamun/pen/NdwZdW</a></p>
                            <img src="/img/gallery/pmpark-cheryInternational/homepage/youtube-numberAnim.png"/>
                            <p className="demoComments">The most useful Youtube video I referenced for this issue<br/><a href="https://www.youtube.com/watch?v=LmjHp9AFCqU ">https://www.youtube.com/watch?v=LmjHp9AFCqU</a></p>

                            <img src="/img/gallery/pmpark-cheryInternational/homepage/numberAnim-prototype.gif"/>
                            <p className="demoComments">testing environment I set up to test the Codepen demo and the Youtube video mentioned above</p>
                        </div>



                    </div>


                </div>

            </div>

        </>
    );
}