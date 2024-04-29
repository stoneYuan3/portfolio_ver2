import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";
import { WorkIntroNoBanner, WorkIntroBox } from "../commonParts"

export const SelaProject=(props)=>{
    return(
        <>
            <PageTitle title="Sela Bible Poetry Analysis App" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <div id="section-work-body">

                        {/* <WorkIntroNoBanner 
                            workType={"Front-end development"}
                            workSkill={"HTML, CSS, Typescript, React.js, Git"}
                            workContext={"Volunteer project, Team, July 2023 - present "}
                        />
                        <div className="sectionList">
                            <a className="flex flex-align-center link" href="https://github.com/teamsela/sela-web">
                                <img src="/img/base/link-github.svg" />Github Link
                            </a>
                            <a className="flex flex-align-center link" href="https://biblepoetry.org/">
                                <img src="/img/base/link-webGeneral.svg" />Team Website
                            </a>
                         </div> */}

                        {/* <div className="sectionList">
                            <p>
                                This is a volunteer web development project. One of my friends in a local church knows somebody who can read Hebrew and is very interested in Bible Poetry. He found that the current English translation for Bible poetries does not respect the original Hebrew grammar structure, and would like to develop a web application that helps people to better analyse those poetries with the original grammar order in mind. He asked my friend, who has a computer science background, to help and my friend organized a small team of 4-5 people including me to realize this web application. 
                            </p>
                            <p>
                                The project started around July 2023. After spending several months finding the right tools, we decided to use Create T3 App, a Javascript framework including Next.js to build the application. My role is to develop the front-end part of the application using React.js. At the moment the project is still ongoing and we are hoping to release the first version by the end of this year.
                            </p>
                        </div>
                        <div className="sectionList">
                            <h2>Gain:</h2>
                            <p>
                                Gained a much deeper understanding towards React.js. Realized many crucial front-end functionalities with React class, useState and some external plugins such as React Colour. Gained experience in using version control tools (Git) in complex teamwork including merging codes from other team members, forking source code, sending push requests and so on.
                            </p>
                        </div> */}

                        {/* new work intro */}
                        <WorkIntro 
                            banner={"/img/gallery/sela/banner.png"}
                            workType={"Front-end development"}
                            workSkill={"HTML, CSS, Typescript, React.js, Git"}
                            workContext={"Volunteer project, Team "}
                            time={"July 2023 - present"}
                            link={
                                <div className="sectionList workIntroLinks">
                                    <a className="link" href="https://github.com/teamsela/sela-webapp">
                                        <img src="/img/base/link-github.svg" />Github Link
                                    </a>
                                    <a className="link" href="https://biblepoetry.org/">
                                        <img src="/img/base/link-webGeneral.svg" />Team Website
                                    </a>
                                    <a className="link" href="https://sela-webapp.vercel.app/">
                                        <img src="/img/base/link-webGeneral.svg" />Deployed Prototype
                                    </a>
                                </div>
                            }
                        />

                        <div className="sectionList">
                            <h2>Summary</h2>
                            <p>
                                <ul className="ul-normal">
                                    <li>This is a volunteer web development project for a non-profit organization.</li>
                                    <li>This project is about developing a bible poetry reader that helps users to analysis bible poetry in the original Hebrew grammar structure.</li>
                                    <li>I serve as the front-end developer of the team starting at July 2023. The team has 2 front-end developer, 1 back-end developer, 1 project mananger and a bible expert who doesn't have programming background.</li>
                                    <li>So far I am in charge of developing the reader interface, including functionalities such as selecting poetry words, changing poetry word colour and adjust font size.</li>
                                </ul>
                            </p>

                        </div>
                        <div className="sectionList">
                            <h2>Gain:</h2>
                            <p>
                                <ul className="ul-normal">
                                    <li>Gained a deeper understanding towards React.js.</li>
                                    <li>Gained experience in using version control tools (Git) in complex teamwork environment</li>
                                    <li>Gained hands-on experience on popular React.js frameworks such as Next.js</li>
                                </ul>
                            </p>
                        </div>
                        
                        <div>
                            <div className="sectionList demoHead">
                                <h2>Demo:</h2>
                            </div>
                            {/* <div className="sectionList demoHead">
                                <img src="/img/gallery/sela/interface-current.png"/>
                                <p className="demoComments">The current interface</p>
                            </div> */}
                            <div className="sectionList">
                                <img src="/img/gallery/sela/demo-color-0429.gif"/>
                                <p className="demoComments">Current status of the select and change colour feature</p>
                            </div>

                            {/* <div className="sectionList">
                                <h2>Process/Challenge:</h2>
                                <p>
                                    This project is one of the most challenging projects I encountered so far. Our initial inspiration comes from an existing Bible reading tool called <a href="https://www.stepbible.org/">STEP Bible</a>, which is a fairly complex application. Some of our basic front-end features inspired by the STEP Bible will allow users to select each individual bible words, highlight those words in different colour and so on. Those functionalities are quite new to me given my previous experience with React.js.
                                </p>
                                <p>
                                    To tackle those challenges, I used a combination of generative AI tools and the official document of React to quickly equip myself the necessary skills. The general procedure I took is listed below:
                                </p>
                                <p>
                                        <ol>
                                            <li>
                                                <strong>1</strong> Build the interface of the feature based on what I already know
                                            </li>
                                            <li>
                                                <strong>2</strong> Ask ChatGPT how to realize the feature based on my current interface structure
                                            </li>
                                            <li>
                                                <strong>3</strong> Proceed to React.js's official documentation to learn more about the tools involved in ChatGPT's responses, potentially go back to step 1 to rebuild the interface structure
                                            </li>
                                            <li>
                                                <strong>4</strong> Test and experiment with the result. If it works, proceed to the next feature. If not, go back to step 2.
                                            </li>
                                        </ol>
                                    </p>
                            </div>

                            <div className="sectionList">
                                <h3>Case Study: Adjusting Font Size Feature</h3>
                                <p>
                                    One of the features that my team would like to add is that they want to allow users to change the font size of Bible poetry word boxes.
                                </p>
                                <p>This is not the most complex feature I implemented so far, but it best represents my problem-solving process. The knowledge I gained from this feature also helped me to develop a deeper understanding towards React and helped me to implement other features more smoothly.</p>
                                <img src="/img/gallery/sela/wordbox.png"/>
                                <p className="demoComments">Each "word box" is wrapped by a border. Each word box represents one word in Hebrew</p>
                            </div>
                            <div className="sectionList">
                                <p>
                                    At the time I started working on this feature, I already completed the necessary interface components for this feature. The structure of my interface components is shown below. Based on my previous React.js experience, I made an educated guess where I put the body content component (the poem words) under the navigation component as a child component.
                                </p>
                                <img src="/img/gallery/sela/structure1.png"/>
                            </div>
                            <div className="sectionList">
                                <p>
                                    To get started, I asked ChatGPT about how to implement this function based on my codes. I find that this feature can be easily achieved using React state management. I have used React state management briefly when developing this portfolio, but I haven't realized that it can also be used in this way.
                                </p>
                                <img src="/img/gallery/sela/gpt1.png"/>
                                <p className="demoComments">A screenshot showing how I started the conversation with ChatGPT</p>
                            </div>
                            <div className="sectionList">
                                <p>
                                    After double-checking with React.js's official document, I planned out how to execute this feature mainly on paper. I wrote down my current interface structure and planned out where I should put the font size-related function based on what I learned from ChatGPT and React's official documentation. I then implemented the feature successfully based on the note.
                                </p>
                                <img src="/img/gallery/sela/note1.png"/>
                                <p className="demoComments">My notes for this feature. It also has plans for other features such as changing the word box colour.</p>
                                <img src="/img/gallery/sela/demo-fontsize.gif"/>
                                <p className="demoComments">Result</p>
                            </div> */}
                        </div>
                        
                    </div>


                </div>

            </div>

        </>
    );
}