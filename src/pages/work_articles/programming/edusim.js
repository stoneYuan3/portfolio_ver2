import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const Edusim=(props)=>{
    return(
        <>
            <PageTitle title="PRC education simulator" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntro 
                        banner={"/img/banner-edusim.png"}
                        workType={"Java Mini Game"}
                        workSkill={"Java"}
                        workContext={"School Project, Individual"}
                        time={"2020"}
                        link={
                            <div className="sectionList workIntroLinks">
                                <a className="link" href="https://github.com/stoneYuan3/PRCeducationSimulator-IAT265Final">
                                    <img src="/img/base/link-github.svg" />Github Link
                                </a>
                            </div>
                        }
                    />        

                    <div id="section-work-body">

                        <p>
                            This project is the final project of a Java introduction course. Working individually, I'm asked to develop a simulator of some kind that uses concepts such as object-oriented programming, polymorphism, collision detection and so on.
                        </p>
                        <p>
                            The result I developed is a simulator which simulates school life under the rule of the Chinese Communist Party. Other than coding, I also made all the visual elements in the project.
                        </p>

                        <h2>Video Demonstration</h2>
                        <div id="section-videoDemo">

                            <section>
                                <h3>Walkthrough</h3>
                                <div className="section-vidBox">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/h5G8zs-u9to" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </section>

                        </div>

                        <h2>Final Thoughts</h2>
                        <p>
                            Although the result is just a mini game, this project gives me a better understanding of object-oriented programming. It also helps me to establish my interest in programming in general, since I do find the process enjoyable.
                        </p>

                    </div>

                </div>

            </div>

        </>
    );
}