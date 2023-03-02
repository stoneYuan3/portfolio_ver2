import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const Riskmap=()=>{
    return(
        <>
            <PageTitle title="529 Garage Risk Map" />
            <BackToGallery link="/" />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntro 
                        banner={"/img/banner-riskmap.png"}
                        linkHref={"https://github.com/stoneYuan3/529-Garage-Risk-Map"}
                        linkIcon={"/img/base/link-github.svg"}
                        linkTitle={"View in Github"}
                        workType={"Full Stack Website"}
                        workSkill={"HTML | CSS | JQuery | PHP | MySQL"}
                        workContext={"School Project, Individual, 2022"}
                    />
                    
                    <div id="section-work-body">
                        <p>
                            This is a hybrid project that include both User Experience design and web development. To complete the project, I researched a client that may need design intervention, figured out a solution for the client, and finally develop the
                            solution.
                        </p>

                        <p>The client I have chosen is <a href="https://project529.com/garage">529 Garage</a>, a bike database focusing on stopping bike theft. 529 Garage helps people register their bikes to make them easier to recover once stolen.</p>
                        <p>
                            Despite 529 Garage aims to reduce bike theft and encourage bike usage, their solution is not sufficient since it jumps in after the harm is already caused. To better achieve 529 Garage’s goal, something needs to be done to stop bike
                            theft from happening. Which lead to the development part of this project.
                        </p>
                        <p>
                            This project includes an interactive map showing the locations of bike theft reports, as well as locations of bike parking lots as well as their safety measures. This project hopes to give 529 Garage a way to help their users before
                            their bike is stolen by helping bike owners to get better at bike parking when using their bikes.
                        </p>

                        <h2>Video Demonstration</h2>
                        <div id="section-videoDemo">
                            <section>
                                <h3>Feature 1: Check the locations of bike theft reports and parking lots</h3>
                                <div className="section-vidBox">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/so9UJ6WMLRk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </section>

                            <section>
                                <h3>Feature 2: Report a theft</h3>
                                <div className="section-vidBox">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/BwWOEmLkNtc"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </section>

                            <section>
                                <h3>Feature 3: Report a theft that happens in a parking lot</h3>
                                <div className="section-vidBox">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/B2PmiqzmyeM"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </section>
                        </div>

                        <h2>Final Thoughts</h2>
                        <p>
                            The most valuable part of this project is perhaps the extensive self-learning I took during the process. Building a map-related web application is something that I barely know about when starting this project.
                        </p>
                        <p>
                            Despite I know the fundamentals of building a website, I still had to learn additional skills such as embedding a map in a website with a map plugin, working with the map plugin, finding a way to divide the map into sections and
                            interact with those sections, and so on.
                        </p>
                        <p>
                            Despite I eventually found working with maps not as challenging as I thought, the fact that I figured it out all by myself give me the confidence to self-learn more challenging topics in the future.
                        </p>

                    </div>

                </div>

            </div>

        </>
    );
}