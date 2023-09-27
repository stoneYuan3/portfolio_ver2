import { WorkIntro } from "../commonParts"
import { PageTitle } from "../../pages";
import { BackToGallery } from "../commonParts";

export const Garage=(props)=>{
    return(
        <>
            <PageTitle title="Garage, Artwork Sharing Platform" />
            <BackToGallery link={props.backlink} />
            
            <div className="flex flex-column section-contentDisplay">
                <div className="flex flex-column section-work">
                    <WorkIntro 
                        banner={"/img/banner-garage.png"}
                        linkHref={"https://github.com/stoneYuan3/IAT352-finalProject"}
                        linkIcon={"/img/base/link-github.svg"}
                        linkTitle={"View in Github"}
                        workType={"Full Stack Website"}
                        workSkill={"HTML/CSS, JQuery, PHP, MySQL, Git"}
                        workContext={"School Project, Group, 2022"}
                    />
                    
                    <div id="section-work-body">

                        <p>
                            This project is the final project of a web development class. Working in a group of three, we are asked to develop a website that displays content, allow users to filter content, allow users to become a member by creating an account, and allow members to have a customized home page.
                            </p>
                            <p>
                            The website we develop is Garage, a fictional artwork-sharing platform based on the layouts I designed for another web design project, where people can share their artworks and any random thoughts, follow other people, collect items, and so on. 
                            </p>
                            <p>
                            Considering the different skill levels of my group members, we assigned different roles to each member where one member focused on HTML/CSS layout, one member focused on creating the database and some server-side functionalities, and I focus on server-side development with PHP.
                            </p>
                            <p>
                            Additionally, I was also in charge of integrating my teammate's work, such as editing HTML codes to fit backend settings, and setting up connections between the front end and back end using JQuery AJAX calls. JQuery/AJAX is not necessary for the project, but I want to try some more advanced features.
                            </p>

                            <h2>Video Demonstration</h2>
                            <div id="section-videoDemo">

                            <section>
                                <h3>Demonstration of all major functionalities, done by my teammates</h3>
                                <div className="section-vidBox">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9Q5SlYJRoJM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                                    </iframe>
                                </div>
                            </section>

                            </div>

                            <h2>Final Thoughts</h2>
                            <p>
                            Besides dealing with issues I encountered when developing in a way that is slightly beyond the requirement of this class, this project also taught me a lesson about collaborating with people with different skill levels and expectations.
                            </p>
                            <p>
                            Despite the class covers JQuery and AJAX call to some extent, it is not required to use those advanced methods. None of my teammates knows how to deal with JQuery. One of them only knows PHP, and one of them is only confident in HTML layout.
                            </p>
                            <p>
                            One takeaway that I have from this interesting situation is that never assume that other people are on the same page as I do. Some conflicts were caused because I assumed that the rest of my team at least understands how JQuery and AJAX call work when distributing the work. This indicates that more communication effort should be made during the planning phase of a group project.
                            </p>
                            <p>
                            The other takeaway comes from the work distribution of this project. In this project, all members contributed to the field they are good at, and one member with a better understanding integrate everything into a whole. This method appears to be a good way to handle skill differences, where I can choose to be the contributor or the integrator depending on my skill level the next time I encounter similar scenarios.
                            </p>

                    </div>

                </div>

            </div>

        </>
    );
}